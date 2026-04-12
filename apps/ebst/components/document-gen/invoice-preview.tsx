import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { InvoiceItemData } from "@/hooks/useDocumentGen";

interface InvoicePreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: {
    invoiceNo: string;
    to: string;
    poNo: string;
    date: string;
    items: InvoiceItemData[];
    dppHargaJual: number;
    dppNilaiLain: number;
    ppn: number;
    total: number;
  };
}

export function InvoicePreview({ open, onOpenChange, data }: InvoicePreviewProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(new Date(dateStr));
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="mb-4">
          <DialogTitle>Invoice Preview</DialogTitle>
          <DialogDescription>This is an approximation of the final PDF layout.</DialogDescription>
        </DialogHeader>

        <div className="bg-white text-black p-8 font-sans border rounded-sm shadow-sm scale-95 origin-top mx-auto max-w-[800px]">
          {/* Header */}
          <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-5">
            <div className="font-sans font-black text-3xl tracking-tight">
              <span className="text-[#009640]">e</span><span className="text-[#e30613]">B</span><span className="text-[#009640]">S</span><span className="text-[#e30613]">T</span>
            </div>
            <div className="text-left grow pl-24">
              <h1 className="text-xl font-bold m-0 pb-1">PT. BERKAH SELARAS TEKNINDO</h1>
              <div className="text-[10px] text-gray-800">
                Jln Raya Sukamahi no 75 Delta Mas Cikarang Pusat, Bekasi - Jawa Barat<br />
                Phone: 021- 8097 0055 Fax: 021- 8097 0055 e-Mail: marketing@bst-indo.com
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full mb-8 text-[13px]">
            <div className="flex py-2 border-b border-black">
              <div className="w-24 italic font-bold">Invoice no</div>
              <div className="mr-4">:</div>
              <div className="font-bold">{data.invoiceNo}</div>
            </div>
            <div className="flex justify-between py-2 border-b border-black">
              <div className="flex w-1/2">
                <div className="w-24 italic font-bold">To.</div>
                <div className="mr-4">:</div>
                <div>{data.to}</div>
              </div>
              <div className="flex w-1/2">
                <div className="w-24 italic font-bold">Date</div>
                <div className="mr-4">:</div>
                <div>{formatDate(data.date)}</div>
              </div>
            </div>
            <div className="flex py-2 border-b-2 border-black border-t-0">
              <div className="w-24 italic font-bold">PO No.</div>
              <div className="mr-4">:</div>
              <div>{data.poNo}</div>
            </div>
          </div>

          {/* Items Table */}
          <table className="w-full border-collapse mb-8 text-[13px]">
            <thead>
              <tr>
                <th className="border border-black p-2 text-center font-normal bg-white uppercase w-[5%]">NO</th>
                <th className="border border-black p-2 text-center font-normal bg-white uppercase w-[15%]">PART NO.</th>
                <th className="border border-black p-2 text-center font-normal bg-white uppercase w-[40%]">DESCRIPTION</th>
                <th className="border border-black p-2 text-center font-normal bg-white uppercase w-[15%]">UNIT PRICE,<br />Rp</th>
                <th className="border border-black p-2 text-center font-normal bg-white uppercase w-[10%]">QTY,<br />{data.items[0].qtyUnit}</th>
                <th className="border border-black p-2 text-center font-normal bg-white uppercase w-[15%]">AMOUNT,<br />Rp</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, i) => (
                <tr key={i}>
                  <td className="border border-black p-2 text-center">{item.no}</td>
                  <td className="border border-black p-2 text-center">{item.partNo || 'N/A'}</td>
                  <td className="border border-black p-2 text-left">{item.description}</td>
                  <td className="border border-black p-2 text-right">{formatCurrency(item.unitPrice)}</td>
                  <td className="border border-black p-2 text-center">{item.qty}</td>
                  <td className="border border-black p-2 text-right">{formatCurrency(item.unitPrice * item.qty)}</td>
                </tr>
              ))}

              {/* Empty Rows padding */}
              {data.items.length < 5 && Array.from({ length: 5 - data.items.length }).map((_, i) => (
                <tr key={`empty-${i}`}>
                  <td className="border border-black h-8"></td>
                  <td className="border border-black h-8"></td>
                  <td className="border border-black h-8"></td>
                  <td className="border border-black h-8"></td>
                  <td className="border border-black h-8"></td>
                  <td className="border border-black h-8"></td>
                </tr>
              ))}

              {/* Summary */}
              <tr>
                <td colSpan={3} className="border-r border-black border-t"></td>
                <td colSpan={2} className="border border-black p-2 pl-3 text-left">DPP Harga Jual</td>
                <td className="border border-black p-2 text-right">{formatCurrency(data.dppHargaJual)}</td>
              </tr>
              <tr>
                <td colSpan={3} className="border-r border-black"></td>
                <td colSpan={2} className="border border-black p-2 pl-3 text-left">DPP Nilai Lain</td>
                <td className="border border-black p-2 text-right">{formatCurrency(data.dppNilaiLain)}</td>
              </tr>
              <tr>
                <td colSpan={3} className="border-r border-black"></td>
                <td colSpan={2} className="border border-black p-2 pl-3 text-left">PPN 12%</td>
                <td className="border border-black p-2 text-right">{formatCurrency(data.ppn)}</td>
              </tr>
              <tr>
                <td colSpan={3} className="border-r border-black"></td>
                <td colSpan={2} className="border border-black p-2 pl-3 text-left">TOTAL</td>
                <td className="border border-black p-2 text-right">{formatCurrency(data.total)}</td>
              </tr>
            </tbody>
          </table>

          {/* Payment Section */}
          <div className="mt-8 mb-16 text-[13px]">
            <div className="underline font-bold mb-4">PAYMENT:</div>
            <div className="flex flex-row items-center gap-5">
              <div className="text-[0px] leading-[0px]">
                <div className="h-10 w-32 bg-slate-100 flex items-center justify-center text-xs text-slate-400 italic border border-dashed border-slate-300 rounded-[2px]">Bank Logo</div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold pb-1">BANK MANDIRI KCP BEKASI KOTA DELTA MAS</div>
                <table className="border-none m-0">
                  <tbody>
                    <tr>
                      <td className="w-[100px] p-0.5 border-none">Atas nama</td>
                      <td className="w-2.5 p-0.5 border-none">:</td>
                      <td className="p-0.5 border-none">PT. BERKAH SELARAS TEKNINDO</td>
                    </tr>
                    <tr>
                      <td className="p-0.5 border-none">No. Rekening</td>
                      <td className="p-0.5 border-none">:</td>
                      <td className="p-0.5 border-none">156-00-1363125-6</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[200px] text-[13px]">
            <div className="mb-[60px]">Prepared by</div>
            <span>Linda Rahman</span>
            <div className="border-t border-black pt-1"></div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
