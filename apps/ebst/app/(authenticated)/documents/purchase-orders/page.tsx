"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Plus, Search, Trash2, Loader2 } from "lucide-react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { usePurchaseOrders, useCreatePurchaseOrder, CreatePoDto } from "@/hooks/usePurchaseOrders";
import { useCustomerSearch } from "@/hooks/useCustomers";
import { useParts } from "@/hooks/useParts";
import { useDebounce } from "@/hooks/useDebounce";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const poFormSchema = z.object({
  poNumber: z.string().min(1, "PO Number is required"),
  customerId: z.string().min(1, "Customer is required"),
  dueDate: z.string().min(1, "Due date is required"),
  notes: z.string().optional(),
  lineItems: z
    .array(
      z.object({
        partId: z.string().min(1, "Part is required"),
        quantity: z.number().min(1, "Quantity must be at least 1"),
        unitPrice: z.number().min(0, "Unit price must be at least 0"),
      })
    )
    .min(1, "At least one line item is required"),
});

type PoFormValues = z.infer<typeof poFormSchema>;

export default function PurchaseOrdersPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [customerSearch, setCustomerSearch] = useState("");
  const debouncedSearch = useDebounce(customerSearch, 500);
  
  const { purchaseOrders, loading } = usePurchaseOrders();
  const { mutate: createPo, isPending: isCreating } = useCreatePurchaseOrder();
  const { data: customers } = useCustomerSearch(debouncedSearch);
  const { parts, loading: loadingParts } = useParts();

  const form = useForm<PoFormValues>({
    resolver: zodResolver(poFormSchema),
    defaultValues: {
      poNumber: "",
      customerId: undefined as any,
      dueDate: format(new Date(), "yyyy-MM-dd"),
      notes: "",
      lineItems: [{ partId: undefined as any, quantity: 1, unitPrice: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "lineItems",
  });

  const onSubmit = (values: PoFormValues) => {
    const payload: CreatePoDto = {
      ...values,
      dueDate: new Date(values.dueDate),
      notes: values.notes || undefined,
    };

    createPo(payload, {
      onSuccess: () => {
        toast.success("Purchase Order created successfully");
        setIsCreateOpen(false);
        form.reset();
      },
      onError: (err: any) => {
        toast.error(err.response?.data?.message || "Failed to create Purchase Order");
      },
    });
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Purchase Orders</h1>
          <p className="text-muted-foreground">
            Manage customer purchase orders and line items.
          </p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Purchase Order
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create Purchase Order</DialogTitle>
              <DialogDescription>
                Fill in the details for the new purchase order.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="poNumber">PO Number</Label>
                  <Input
                    id="poNumber"
                    {...form.register("poNumber")}
                    placeholder="PO-12345"
                  />
                  {form.formState.errors.poNumber && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.poNumber.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    {...form.register("dueDate")}
                  />
                  {form.formState.errors.dueDate && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.dueDate.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="customerId">Customer</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search customers..."
                      className="pl-8"
                      value={customerSearch}
                      onChange={(e) => setCustomerSearch(e.target.value)}
                    />
                  </div>
                  <Select
                    value={form.watch("customerId")}
                    onValueChange={(value) => form.setValue("customerId", value)}
                  >
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Select customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customers?.map((customer) => (
                        <SelectItem key={customer.id} value={customer.id}>
                          {customer.name}
                        </SelectItem>
                      ))}
                      {(!customers || customers.length === 0) && debouncedSearch.length <= 1 && (
                        <SelectItem value="none" disabled>
                          Type more than 1 char to search...
                        </SelectItem>
                      )}
                      {debouncedSearch.length > 1 && (!customers || customers.length === 0) && (
                        <SelectItem value="none" disabled>
                          No customers found
                        </SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                {form.formState.errors.customerId && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.customerId.message}
                  </p>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-semibold">Line Items</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => append({ partId: "", quantity: 1, unitPrice: 0 })}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Item
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="grid grid-cols-[1fr,120px,120px,40px] gap-4 items-end border p-4 rounded-lg bg-muted/30"
                    >
                      <div className="space-y-2">
                        <Label>Part</Label>
                        <Select
                          value={form.watch(`lineItems.${index}.partId`)}
                          onValueChange={(value) =>
                            form.setValue(`lineItems.${index}.partId`, value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select part" />
                          </SelectTrigger>
                          <SelectContent>
                            {parts.map((part) => (
                              <SelectItem key={part.id} value={part.id}>
                                {part.partNo} - {part.description}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Quantity</Label>
                        <Input
                          type="number"
                          {...form.register(`lineItems.${index}.quantity`, {
                            valueAsNumber: true,
                          })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Unit Price</Label>
                        <Input
                          type="number"
                          step="0.01"
                          {...form.register(`lineItems.${index}.unitPrice`, {
                            valueAsNumber: true,
                          })}
                        />
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="text-destructive h-10"
                        onClick={() => remove(index)}
                        disabled={fields.length === 1}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
                {form.formState.errors.lineItems && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.lineItems.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  {...form.register("notes")}
                  placeholder="Additional information..."
                  className="min-h-[100px]"
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isCreating}>
                  {isCreating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Purchase Order
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Existing Purchase Orders</CardTitle>
          <CardDescription>
            A list of all purchase orders from your customers.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PO Number</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      <div className="flex items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin mr-2" />
                        Loading purchase orders...
                      </div>
                    </TableCell>
                  </TableRow>
                ) : purchaseOrders.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No purchase orders found.
                    </TableCell>
                  </TableRow>
                ) : (
                  purchaseOrders.map((po) => (
                    <TableRow key={po.id}>
                      <TableCell className="font-medium">{po.poNumber}</TableCell>
                      <TableCell>{po.customer.name}</TableCell>
                      <TableCell>{format(new Date(po.dueDate), "PPP")}</TableCell>
                      <TableCell>{po.lineItems.length} items</TableCell>
                      <TableCell>
                        <Badge variant="secondary">Active</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
