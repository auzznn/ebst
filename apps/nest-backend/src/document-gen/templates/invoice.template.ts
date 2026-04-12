export interface InvoiceData {
  invoiceNo: string;
  to: string;
  poNo: string;
  date: string;
  items: Array<{
    no: number;
    partNo: string;
    description: string;
    unitPrice: number;
    qty: number;
    qtyUnit: string;
    amount: number;
  }>;
  dppHargaJual: number;
  dppNilaiLain: number;
  ppn: number;
  total: number;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const generateInvoiceHtml = (data: InvoiceData): string => {
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

  const itemRows = data.items.map((item) => `
    <tr>
      <td class="text-center">${item.no}</td>
      <td class="text-center">${item.partNo || 'N/A'}</td>
      <td>${item.description}</td>
      <td class="text-right">${formatCurrency(item.unitPrice)}</td>
      <td class="text-center">${item.qty}</td>
      <td class="text-right">${formatCurrency(item.amount)}</td>
    </tr>
  `).join('');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Invoice - ${data.invoiceNo}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Liberation+Sans:wght@400;700&display=swap');
    
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Liberation Sans', Arial, sans-serif;
      margin: 0;
      padding: 40px;
      color: #000;
      font-size: 13px;
      line-height: 1.4;
      background: #fff;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    .logo-area {
      font-family: Arial, sans-serif;
      font-weight: 900;
      font-size: 28px;
    }
    
    .logo-red { color: #e30613; }
    .logo-green { color: #009640; }

    .company-info {
      text-align: left;
      flex-grow: 1;
      padding-left: 100px;
    }

    .company-name {
      font-size: 20px;
      font-weight: bold;
      margin: 0 0 5px 0;
    }

    .company-details {
      font-size: 10px;
      color: #333;
    }

    .info-section {
      width: 100%;
      margin-bottom: 30px;
    }

    .info-row {
      display: flex;
      padding: 8px 0;
      border-bottom: 1px solid #000;
    }

    .info-col {
      display: flex;
      width: 50%;
    }

    .info-label {
      width: 100px;
      font-style: italic;
      font-weight: bold;
    }

    .info-value {
      font-weight: normal;
    }
    
    .info-colon {
      margin-right: 15px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 30px;
    }

    th, td {
      border: 1px solid #000;
      padding: 8px;
    }

    th {
      text-align: center;
      font-weight: normal;
      background-color: #fff;
      text-transform: uppercase;
    }

    .empty-row td {
      border-top: none;
      border-bottom: none;
      height: 20px;
    }

    .text-center { text-align: center; }
    .text-right { text-align: right; }
    .text-left { text-align: left; }
    .font-bold { font-weight: bold; }

    .summary-row td {
      border: 1px solid #000;
    }

    .summary-label {
      text-align: left;
      padding-left: 10px;
    }

    .payment-section {
      margin-top: 30px;
      margin-bottom: 60px;
    }

    .payment-title {
      text-decoration: underline;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .payment-details {
      display: flex;
      align-items: center;
    }

    .bank-logo {
      margin-right: 20px;
      line-height: 0;
      font-size: 0;
    }

    .bank-info table {
      width: auto;
      border: none;
      margin: 0;
    }

    .bank-info td {
      border: none;
      padding: 3px 6px;
    }

    .bank-name {
      font-weight: bold;
    }

    .footer {
      display: flex;
      flex-direction: column;
      width: 200px;
    }
    
    .prepared-by {
      margin-bottom: 60px;
    }

    .signature-line {
      border-top: 1px solid #000;
      padding-top: 5px;
    }
  </style>
</head>
<body>

  <div class="header-container">
    <div class="logo-area">
      <span class="logo-green">e</span><span class="logo-red">B</span><span class="logo-green">S</span><span class="logo-red">T</span>
    </div>
    <div class="company-info">
      <h1 class="company-name">PT. BERKAH SELARAS TEKNINDO</h1>
      <div class="company-details">
        Jln Raya Sukamahi no 75 Delta Mas Cikarang Pusat, Bekasi - Jawa Barat<br>
        Phone: 021- 8097 0055 Fax: 021- 8097 0055 e-Mail: marketing@bst-indo.com
      </div>
    </div>
  </div>

  <div class="info-section">
    <div class="info-row" style="border-bottom: 1px solid #000;">
      <div class="info-label">Invoice no</div>
      <div class="info-colon">:</div>
      <div class="info-value font-bold">${data.invoiceNo}</div>
    </div>
    <div class="info-row" style="border-bottom: 1px solid #000;">
      <div class="info-col">
        <div class="info-label">To.</div>
        <div class="info-colon">:</div>
        <div class="info-value">${data.to}</div>
      </div>
      <div class="info-col">
        <div class="info-label">Date</div>
        <div class="info-colon">:</div>
        <div class="info-value">${formatDate(data.date)}</div>
      </div>
    </div>
    <div class="info-row" style="border-bottom: 2px solid #000; border-top: none;">
      <div class="info-label">PO No.</div>
      <div class="info-colon">:</div>
      <div class="info-value">${data.poNo}</div>
    </div>
  </div>

  <table>
    <thead>
      <tr>
        <th width="5%">NO</th>
        <th width="15%">PART NO.</th>
        <th width="40%">DESCRIPTION</th>
        <th width="15%">UNIT PRICE,<br>Rp</th>
        <th width="10%">QTY,<br>${data.items[0].qtyUnit}</th>
        <th width="15%">AMOUNT,<br>Rp</th>
      </tr>
    </thead>
    <tbody>
      ${itemRows}
      <!-- Empty row for spacing if needed -->
      ${data.items.length < 5 ? Array(5 - data.items.length).fill(`
      <tr class="empty-row">
        <td></td><td></td><td></td><td></td><td></td><td></td>
      </tr>`).join('') : ''}
      
      <!-- Summary rows -->
      <tr class="summary-row">
        <td colspan="3" style="border-left: none; border-bottom: none;"></td>
        <td colspan="2" class="summary-label">DPP Harga Jual</td>
        <td class="text-right">${formatCurrency(data.dppHargaJual)}</td>
      </tr>
      <tr class="summary-row">
        <td colspan="3" style="border: none;"></td>
        <td colspan="2" class="summary-label">DPP Nilai Lain</td>
        <td class="text-right">${formatCurrency(data.dppNilaiLain)}</td>
      </tr>
      <tr class="summary-row">
        <td colspan="3" style="border: none;"></td>
        <td colspan="2" class="summary-label">PPN 12%</td>
        <td class="text-right">${formatCurrency(data.ppn)}</td>
      </tr>
      <tr class="summary-row">
        <td colspan="3" style="border: none;"></td>
        <td colspan="2" class="summary-label">TOTAL</td>
        <td class="text-right">${formatCurrency(data.total)}</td>
      </tr>
    </tbody>
  </table>

  <div class="payment-section">
    <div class="payment-title">PAYMENT:</div>
    <div class="payment-details">
      <div class="bank-logo" style="margin-right: 20px; font-size: 0; line-height: 0;">
        <img src= "data:image/png;base64,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TAFAERERERERERGROqYAoIiIiIiIiIiISB1TAFBERERERERERKSOKQAoIiIiIiIiIiJSxxQAFBERERERERERqWMKAIqIiIiIiIiIiNQxBQBFRERERERERETqmAKAIiIiIiIiIiIidUwBQBERERERERERkTqmAKCIiIiIiIiIiEgdUwBQRERERERERESkjikAKCIiIiIiIiIiUscUABQREREREREREaljCgCKiIiIiIiIiIjUMQUARURERERERERE6pgCgCIiIiIiIiIiInVMAUAREREREREREZE6pgCgiIiIiIiIiIhIHVMAUEREREREREREpI4pACgiIiIiIiIiIlLHFAAUERERERERERGpYwoAioiIiIiIiIiI1DEFAEVEREREREREROqYAoAiIiIiIiIiIiJ1TAFAERERERERERGROqYAoIiIiIiIiIiISB1r0iWooEM6JzKsewdCG0uYHYkFw/Bw5Mbr3EtgWUJfReDd0Pwfetb+iweuWq8LV0GHd0wia9vjPoGsD4PMCMgO33QPLFgHbMDDFZitJ8z+k/svXa0L12Amd46kpWcCgY3GekcDE7aoK30CWvAgi4dZAMy7cVtLkFmHhysIsyvYMHIFj3Su0wWV5NXxk5sZtfV2hNltgDFAE8Y4nKDv360H9xVkrIusr6OJlYxY+09uv7pLF082md45nK6eSWR6t8IyW+E2clM/GQRGGDpmjvsKzHrI2CvQ8zKMepmFnb26gCIiIiLJYboEMR0xaxwb2B8L9sd5A8brwXcE2wkYUcIrvgL8A/gdzu/Af8dw/w13X7JSFzuP1vYJmB2A2X7AATj79N0DtgeGl9AMXgZ/BngGs6fBf03QvZSFV7ysi53G+jFrZzLBLoS2I/h2QN8/3XbEbDvwnegLiFTKeuCfwH/A/4nbv4C/4MGfseyTLJm7XDdFqvYZPuX83WnKvoHQ+z6X8J2BnYBtiZ/l7331mGeBv4E9A9lHyIQPsfCy53W561VnQGvXHgT2RtzfALwW2G3j/7Yu44VfxPwZQtv42cqfcH+UJcOegs5wyN5rW1c24c36NBZffLXqpYiIiFR+8iCFHd4xiW6fDnY4zgyMvWpw1izwMNi9BNzFNn9dxA03ZBv2HhzSOZHmrumEHIbZYeB71+S8zhMEvhRsET3DbuaBzmVqEAky5bxdCLJ7E9h+4Hvjti+wNzA2YSX9D/ijWPAwzm/Af83iOS/pBkpsM2dmeP51k7HwMJwZwBRgdI3O/nfgAeAhnNtYMucvuiEpddTZo+hqmULorcA04CBgVA1LsBrsMdwXYbaQ3vVLa/c0hAKAIiIi0rgUAMxl+rk7kW2aCf7/Ng6Mh3atROcF4EYy/JT75iyhL0ujzu/BZ7ci2/weCN4H3srQr1fZA9yFMY+W8CZlaA5FfWiaCkEr+BSw/alsFl9tWzT8Afd7IXMPTc0LWNi5RjdZcjrq7FGsazqOIJiJ+1HAuITU4j9g9gss/AWL5j6mG5X0PrR9V8LgeNzfDkwHhiWodF3AfRg/J+j9ZXWzTRUAFBERkca1OQDY91jlvISU6wkWzzm1pmc85MwRNA9/P24f7QswJHSDFOcJ8KtpGn5d/QUNOgNae47Hwk8BRwLNCS1oF2a/wu1yFl/0a3UjVTD13B2wYCqBteJMBd5M/X5hsQFYgtktdPETHrr4hYa979Nm7Y8HVyanvw3PZsklv635eWfOzPDCHsfjfAg4DhiZ8Dv3LPAdMt3f0tIJCTLl7G3INJ0E9n7gkJSUOgQW4/a/rG+5sfJrrCoAmFNb+y1gwxN8Uf7B4jkfq9316Phf4DXJ+Bzyi1gyd2Eix2lNTa8n67uC7wBsDbY1gTXjPhbIAGNwRmGMAsbTl7H+6th+NfAPMryHhXOeqFDbvjPZbdsfZfHcc/XhJCJDafMmIOuHdzGy64hk9I/sVLNztc7aGYJTMD6BMynxyXXGXmDXkO26mLaOa3C/PPVrjE3uHMnIro9A1xnA61JQ4mG4zwSfSVvHfWCXsfji22iEzMxqBjz+s/shBJm34eE7wV6/sS9oBMOBI3A/ghauoK1jAe7fomn4LxpuEX3PNIMfkZjymO0B1C4AePDsbWkOP8rz9ilg1xTdud2Ai8i2fJ62jnl4eMWQBE6lb5TQNvswjP/ZmO2Xts3eAuBQzA9lZNfVTJt9PUF4FQvnPqVbW9VqcxilrWNdqw+HJ2vcivbHOTAZtyb44ZCXYcrZ2xA0TcVsCthbwd8AjCH0jV/NbvH9rPvAa5nPGGBfeiuU1T7zj8bzexye8HamJ+9EZMhtHhg+0rmOto7eRAwWjYlVP8e0814Dfj7u/0VyM80KGQfMxuwU2tovY0TvV7nz8rWpegf7drYwoetTWNf5lLfQ+FA6FPxQWjv+AHSwZM4t6lYiOrxjEt12LO5v53mOwRjbN3Bs6PFRBjgCsyMIu/5NW8e19A77RsOsP5kNVpJJVHJObfql6e27krXZ4B8Ba0nxHRwGfAgLPkRbx72EwXncf9GD6uxqUYc6h5Pd8FHcTgffq06+PBmL+6fJ2ieZNvvnOHNZfPGjutlSdc6qxJTFaro+52Zts9+M8Q7cjwMms+nJKH3XLSKSZgODfSuBSQko14SNUYDKf8pM/+xWhC2fw8NPkqw1cMq4VnYx65s/Ret5n2HJRTenoMxGa/t7sa4Lgd3roiUZ+wE309bxKyxzBosufFbdSw6HnDmC5hHvwv0jdHM4eEYrkeadgOwIXERT12zaOr6Hh5ex5JJ/1PV7zmRXJaxE1Q0ATjt/N8LseWT5MOn8IqqQwwjCpbR1/AQP2+u+7g6V6Z2jCbv/m7DrHLAd67Q/zfRl3fMeps2+EYLzWHThX3XzpYqS81nkXrsAYNvs7YEP9n0Z5fsq1iciUn+SGgBs5uDOMTzUWckPYGNax8fIcklC3mOl7YyFv6Jt9s+AU1l88X8SWcpp5++Jh98Bn1anbeodePZI2trnMHrtpdx+dZe6GaC1fTKBfRjnA7hP0gWJZRTwGSw4mWmz/4+g5wvVXSR/CI1es4o1o5NTHrOtqvK6kztHMqr7XDw7C2N4HdddA96HBScyreMbdA37XIU/1xvX5JObGbXVyWS7Pg9s0yDv2voCgdl30tbxFUb0dKbuyQdJSU3zVXhCoulm1V8Ddtqs/SHzGdw/Qn0kR4iISB4DN7pIzs6mmZ4JFXut6R170daxGOc71Gfwbwt+IvjjtLYfk6hizZyZoW32OXj2t3Uc/HvVCLAvsmb0o7TNPqBhe5cjZo2jbfY5tHb8GbOHcU6r//ZXVS24n0y26S+0ts9i8snNdfcO+wLmG5LTnVYhA3Ba+wcY2fVX3L8AdR38G1B3OY2Wrj8yrf0oNeUytba/i5ET/4j712ic4N+WmoGzWd/8B6Z1HKcKIZXv+60xMgDbZh9AW8etePBb3E9GwT8RkbqX3ABgU7YS6wAabR2nkOURYGoD3ddtMLuNabPnMr1z6Nd0bJt9AC/s8SD4pSR6kemK2wf8IVrbP91Qvcr0c3eitf1yuoJ/gF/at3GNVNAYzOYyctLjtLZPr8P3l6QMscoFAA85b8e+iZZdD+zQoHV3J9zuoG321znkzBFqyjFNO3832jpuxeznYHvqgrArzq20dVzHUWeP0uWQOv0cqnzdnv7ZrZjW8RXwR+nbaV6LsYiINIgBAUBLTgDQg/ICgId3TKKt41fAtcDIBry3hvsswg2/Yuq5Y4akBMeeOozWji+BP5yY3dRqbzhm19Da8R327Wyp63c6bdb+TJv9TbKZv2L2WWCsutiq2geze5k2+5v1Nfn1lQkqTGUCgK2zP0xT+IeNE61GZ+Cfomn4A0w7X0GsKGbOzNDWcS6eVR3K7UOsb/41bR376FJIhXqp1ckpS4UzAFvbP0a25amNT2VkdLNFRBpL/wCghQkKAIalBwCnzdqfbn4DvK3h77DbsWQyizjkvB1ret6p57+eNaMfwjif+lvcvpTB5H8zoetuWtsn1N17m96+B22zb9ziEZLhSO1qlvvJrG/5DW2z31wnb6l+MgAnd46kreM6zL8PjFd17ecNePZhps4+VpeiYP+6K8/veS9wCY35ZWZU+wAP0nre23UppGyhJ+gR4KAyAcBDztuRae23YfZdYJxusohIY+ofAPQEZQAGVloAcFrHu/FgKbCbbu+r95U30hTez/T2XWtyvrbZHyTIPgy8QRd/C0YbZvcx9dz6ePyvtX0C02bPJWt/6Ft7Uo+QDGEj3xt8KdM6/rsO+qukBQBLq9fTzt+TkV0PAB9S/cxrLIHfTGvHaboUOT9LP0rWftcA6+ZWyhgs/EXDLbsh1RiwJSgDMCw/8H9oRxuZ8BHc9IWLiEiDG5ABmKjMi/iZUq3tn8a5ARitWzvILmRtAVPO26VqZ5g5M0Nr+5fBf6B7kNf+BEOQkVnxiWn7ZzB7GvdZaNHopBiG8x3aOq5OxNqfJU92SNIjwM1M74yfKdE2+3A8+xvgAFXLojIYX6Gt4yJdio2OPXXYxvW5vgeM0QWJW5/sGto6Pq9LIaV/DoX1kwHY2n4yIfdgbKsbKyIiA9YA9DXJ+cDzeBmAre1fwOyawe9JtrArmXBBVTLQpp47huf3+BVmp+syF/VamsJ7mX7Odil+D8dQSpBeauEzhBt+zuTOdD4u6KxLVoE2bBXr8GkdHwG/DT1iFdds2jquhc7G/gyf3r4ra0Yv3bg+l5TuAlrbz9NlkNJmR5kEJUSUvAagMW32NZh9Ey3FIyIir37EDfisWJ+cz7sYjwBPmz0Xs07dzkh2I8j8qqLBgSlnb0OQWYwWJ4/jdWSb5nNwZzo3yjC7WbcwwdzezsiuO5neOT6FdWtdwq5l9HUAp3W043wPaFElLMkptHVd0bDvvu28t9BrDwJvVlWoSF9yIW3tn9GFkBI6/g3JKUoJuwDPnJlhWvt3cNfj8CIi0k+Q2A+8qNlFre1f2PgYokQ3mZEb5jFzZvm7f00/ZzuC5nvQen+lOIDmrptSuTtwNnsz4LqFiTaVbNe96dt4JlGfQ+ARNwJp6zgXZw5aC7NcZzTk45tt7SdCuFCP6VWafZlpHfpyUuLpSVBChMUMAM6cmeH5Pa7H7WO6kSIiMlD/AGCYoEevjOIZgK0dZynzr+QLfDzP71He4zFTztuFbNP9GPvpepZcz2cwqfuq1JX7/kufAx7TDUy8N2F2K1PPTdE6Yr4+YQUqHgDse9TwElW3irmgLja0iaqt/VNg84ARuvUVl8G5ntb23XUpJPrYLEjS51C8J3ae3+Mq4L26iSIiksuATUBI0gfexCITrpkYl+kWluULtLZPL23C0rE1QXgHoEF1udw/3bduWOrcopuXCocQZG5Iz8Yglq4AYGv7yZhdqGpW6X6Rr3Po7Bl1/z5bO84CuxatX1xNEzC7MZXZ9jJU47IkZaJHzwBs7TgLOFU3UERE8knuGoCFAoBtHVMxu04D5grcf7Pvx35EsG9dsbsw9tIlrNhk91raOvZJVZnDQOsApsfR9HZ9IxUlTdYXUYUfAW6bdQJm16p6VUUzof+Uaee9pm7fYWv7eRhXoMfGa+FNTOw+X5dBoulK0ufQ8EhL9rSe93YlRoiISDHBgP9K0uLruQOAfTvY3ggM1+2riJ3Bog8Y9u1sIdv9S7TmX6WNBH7A5JPTs1Pb/Rc9AvxHty4ljP+mtSMFO4umJANwyuw3QvAjIKPKVcVr7/6j9GSvxtA2+0xljtaatzOtW49GSnHZ0clai/a53Qo/Bjz93J2w8HsoMUJERIro/0HRa8la8+LYU4f1+8m+nS0EmRuB7XTrKhoY+Bits1ojHTux+xrwabpoVfFmRkxK0+L3jh4DTltbv5xp501JdBnDMPkBwNb2CWT8Z8Rdm0lK6WZaCbs76+ottc7+MPgVurc114z7D3UZpKje55L1OdTsBR4D7gzIZr4PTNKNExGRYgasAdibrA+8NWP6ZwFO2HAxcIhuWxXCAhZ8o2j2WVvHGeAf1+Wq6p2YxbRZ+6eovAoApm4CHP4o2TsDJz4D0DB+gNY/rR33dlo7Dq6L99I26wTM/xc99iuSXI98qwfoTUx5uoflDwBO65oNHKabJiIiUQxIFQ+SNfEKs5sDgK2zWjE7Q7esavZl1KSP5f3t1PPeClyqy1R1zXjm2tRMDns23AWJWjpAitsF46vJLZ5vSFiB+gcAW9tPATte1aimMsD/Mb0z3Ut/tM1+MwQ/RI+Ni6RBcj6LmnpyZ5tPOf+1OOfpVomISFQD1gBMWACwKegLAE49dwwWXKdBc9V9jkPOHDHop4d3TCII5wHNukS14K20zv5QKor6wFXrwRfonqWNfZC29hMTWrakZQButenfpp2/J2b6ImRIqgV7EXa3p7b8U8/dAfyXxNnRU0SGstNJTgAw25S738j0fgWtiS4iIjH0DwB6mKzMC6fvMTXLXAXspttV9eu9I5nhpwyadnXzf8BrdIFqOe70L6Uo20WPAaezkn2NgzvHJq9YiQsAjuSos/smX579OgrgDOFnlJ/L9PZdU1fu6Z3DCTK/AnbSTRRJTYeTnM+iIMcagG0d71Q2uoiIxP5I6fdfmWE9iSpdyCRaO96G8d+6VbWafHM2+3a2bB5gtH8SeJsuTM3tTNj1mVSUNAx/Rd+GIJIu29HS9YUETrp6E1ek7qataW2fCRyuajOkRpCNsWt9YvrI7q8Ak3X7RNIkQctR2IAA4MyZGZw5ukciIhJX/wBgy5pkBQCN/8W4WbepprZnUvd7AGidtTPocbehG3vSzvTO0Ykv5/2XPgc8rhuWSqcydda+yer3g57EXaWsfRPsalWXRHgPh3akZzOwabPfj/vJum0iqZsiJefLqHBAAPA/rz0JYy/dIxERiaup339lunq1zJvgfhbwYyz4FjBGF2TITCLs/iRwRQrKejPwpgSVpwf4D/BP4J+4/xt4CWMtTjcBK3HL4r4CAGMcBM14OBYLhoFvBeyGsyvGbsAODNo0qS40E2QuAt6ZnP6H3gRep6O0Z2uCZLkAOCrx5Zx2/p549lu6YSKpHAwn57MosC03ATHMOnR/RESkFP0DgLdP6qGtS1dFJtPW8SDwFl2KoR5/+lkce+rXuP3qZDfMwG8htM8PwZnXYfyJkN8S2O8h/D3Z8AnuH/k8dIYVO8v0zuH0rj8QC6aATQGfwsDdYdNbyU6gteNglsx5KBHFsWwPrmibFKojHElbx6EsnnNfYss4vbOJcMN1YFozUiSdEpSNbpufBmlrfzewv26PiIiUon8AkM4QOkLqM9NF4lHwLxl2YPXo9wPfS3Qp75v7MG0d/wG2r/KZ/gHch/tCvOl+dnjyKW64IVv197ewcwOwZOP/+tbfeXHPaTjvxf1EYFKqa5lxAXBMIsoSBD1ktaSkFNUOJDcAGHa14/bWBr9HDqzY+M9m9ESBpEs2OS0p3CID0D6jWyMiIqVqyvGzXqBFl0YkIYxTSXoAEBzsVvCPV/h1lwO3gd2NBfex6MJnE/Fu+4KOC4AFTD75M4yY+J6Nj+Sk9Vv5o5h27t4suvTPCahKvWr0EsExtM0+gMUX/y5xJZs2a3+czzfAPQiBp4Df4f4HjD9g4Z/IspLmkatY2Llm0F9MPXcMzU27EPruuL0Wwjf3ZVWzu6q0JGxY00NS1n6woC+TuLV9d+BQ3RsRESlVrgBgDwoAAjwPPAk8h9lq3FcBTThjCGws7tsA+1A3jwEm0grgGZy/EdjLuK8DujEbj/sYYBTwWuB11PfilW/i0PaDuG/ubxJdSvObcSoRAHwO+CWB/YI1Ly/kkW/1JPp995Xvx8BPaJv1Djy4EGO/lNUxwzOnAp8e8pJ0Z3rIZJF+svRlvz4DPI/ZWsJwNQBBMAb3cRv7wx2BvYARDXJdTgU+kby2FHy9jj+T1gF34n4zYe8tLL38xVh/ff+lq4E/bPzfZtPP2Y7epmMxPxHsCGCYmr0MraC3L3k1AfzVTUDsE6AVaUVEpHT5AoCNx3kC/FbI3AfZJSyZuzzS37V1bI35m3COAd4GtqeqVclWADfjdjdB8ACLLvxrpL+afHIzIyftiXEI2PG4HwmMrqsrE9ongGQHAIf33MP65vUlBh9Wgv2YwK/jvmEPVXT9vlr2Iosv+SX7dt7OhA0dmM0mXV+mfJjpnbNZ2LliaOdcPT1ahYK1OPMJbBFuD7DupceiB8I7A1o37AqZfSF7OGbH0vclST1+cH+A6Z3nDHmd3dK0jo/hTK27S23+IARX0bP+Zh64an3FX3/hZc/Tl+n+PY6YNY7uzAcJ/TPa6VSGsH9JTja6szOt7ZMxPqr7IiIi5Wj0AOAa4Hu4f58lcx8p6RUWz3kJuHPj/86ibfYBuJ+G8UH0DXYUIXAnHlzL8ub5/LGzO/Yr9E2M/7Txf9/l2FOHsXrUOwg4q47WYJrJsaeemujNQO68fC1tHQuA42L81f1g32Fdyzwe6VxXF3eqrw5fwPTZPyMb/jxFXwqMorfrY8CVQzvR8d4GzW/IYvYrwvAHZLvuKD3I0hmyhGfoyxa8GTiDKee/lqD3g5h9Ctiujq7ZCHo3vB+4NhGlObxjEt1cUld1En6BBVex6KKlNTvr3ZesBK4BrqW1/WgC+xLOgRouSY0lJwBovBvs3bolIiJSrqZEf+BVz0qMywn9msiZflH1rUf0cQ6efR7DfDbO/wAZVbVBQmAeYaaT+y98sqKv3BckuwG4gWnnTcH9EvDWlF+v8awdfTzw82QX028GKxYA7MLs+9D75WSsOVclCy/+A4d0vpVM140YM1JRZuN/oPPLQ5qBGWQaLQt9Lfi1ZDPXsPSiv1flDEsvfBq4gH075zBpw0w8OA9877q4emYfIykBwG7OJ+0bAm3uy5eSDf6HpRc/PpSFYMncO4D5TGs/Cbc5wG4aPkmNaD1aERGpO7mes6rnyVcI9h2yPa9j0ZwLKx7829JDF7/AojmnY34Q8GtVtX5+A3YQi+e8r+LBv4EWXbSUxRdPw/g48Eq652P2/sSXMRPeQv5Fc9bgfgVhdncWXfzJug7+veqBzmWsf+Vo4KaUlHh3WjdMG9o6NKxRAoC9mF1LpncPFs89t2rBvy39sbObRXN/yLqX34BxDrC6Dq7jZKbPHvo1N/sW5z+lDq7nMszOYPHwtiEO/vX79GPR3J/Su2FfzC4hSbuzSn330SIiInWmkTIA/4n5R1k0596annXR3MeYfHIrIyddCXymwetbF1gH2/31qxt3Ua3h5GHOdznkvDtoDm9K76NEfgzTO4ezsHNDYou48NJ/0dbxOPCmLX66BrMr6Gn5Kg90Lmu4Wv/It3qY3vk+sl23A9MTX16zdwMLNemqqkcx/ziL5jw2ZHUSLmfquT8iyPyItO8qGfIeBm4qUWtBMBf3tC/7cQctfJB7Lk7ml2V9j8W3M23WbRD8CGdHDeOlih+GPYnZBCSRQ1JewPgbzt8JbAVhuBoLuvFwJUEwYeMx43Afi7EjzrYYu6HlkUREhlRTzqF0/bmFzLAPDdlC4X2TrVOZ1vE4zjfyXPd69wxh8P+4/6KHh27ycNG/OeTMaTQN/y7wvhRew1GEXYcBtyV80HwL+JsAx/wHZMMO7r/0uYbuaRd2buDgzhNo2fBwCtYEfBdwOkM181lNyMi6rQkhcCGZYV9iYefQBzrvv/Q5pnceQe+GyzE7Pb0TUX8P0Dlk558y+40by5DeqbzZpWz71/Nq/OVcaRZdsoi2jjfh/DQ1yytIGpuFMgA3Wwa2APMHMR7Chj3Gws41sV9lemcTdO1Blv0w2w/3ffFwjS6viEjtNOUaSdfXDvN+GYuHtydiV9FFc77LtNnrcb+OhloX0JeS6TmBxVe8PORF6csg+ABt7V1gH03fpbS3k/QAYBDejNuxEJxe04Xjk+6hzlW0tr8PYynJ3h14J6aedzD3X/TgkJy9ZaXD8DqsAPYyFn6ARXPvTFSx+gKRZ9DW/gTYtaRzALAv0zv2YuGcJ4amz/PPkd6B02o8+ACLL7o5VaVePOclJp98NKMmfge3D+sDRqqg0QOALwI/xfwmguGLKvKlVd9rPLHxfzeqiomI1F49ZwA6ztksmXtlokq16OIf0do+HLPvQEPsdfkrMsP/HwvnbkhU3dju6Y/z/J5jwE9MWbU+OvFFvG/uw8Bb0LMzgy2Z+wht7ReCfTHR5QzCE4GhCQCO7w2pv3yAZwmDY7n/4icTW8LFc79BW3sv2LdS+dmUtWM3Tiprq61jH+CdKa2Xqwg4hvsueiCVpe97uuKjtHUsA87QB4xUWNiYb9uW4OG1LB/+M/7Y2a1qICJSXwZvAuJWD5N2B/6HJXOuTGTplsz9X+Cq+q9efivLhs1M5Jp1N9yQZVnL+0nfBi27Me383VLQ/hT8y6e363LgHwkv5buG7Mz/mFRfdcd4nGzPW6u+4VElLJ77Hdw7Uvp5M1RfjpxP7g3Vkm4lYXA09815IOUtzFk850yMr+rDRaSczyp/EPPDWXxxG0vm/ljBPxGR+jR40Gr1EAD0L7B4ztcTXcR1r7SD1/PjkfeTGf6eRA8g/tjZTTbzfmBVqq5s2Ks1j9LsgavW45yf8FK+luntuw7JmYc/V0cBQH+SLjuGpZe/mJoiL5l7CfDDFF7saRxy5oiannH6uTsBM1N4rVZBcNSQPeZfDYuGnYkzTx8wUsnRVoO8z39A+E4WzT2ERXPv1W0XEalvOb619nR/4DnfZfHcLyW+nI98q2dj8GltHdarp8l0vzPRu9W+aumFT+P+qVRdXbPp6rpSbvunfgT8LeFTn6lDct7dl9fLpOtZMtnpPHTxC6krefewTwN/SVmpR9A87JCanjHb9GnSt6lXiPMBFl/0a+pKZ8iYNR8GW6IPGKnQhKLen2RwzL5F97D9WXzJL3W/RUQaQ1Bn7+cxshtOTU1pl170d/CL6uwedGE+k4UJ2PAjqiVzfwzMT9E1PlhdV8rdcEMW/FvJnhrY0AQAb9i3HiZdK4G3sfCy51NZ+oc6V0HwIVKXAWNTanaqQ84cAX5y6u6t8QWWzLmlLvvV26/uItMzE3gekfIbSz0HAJcT2vEsuviTff29iIg0ilwBwLRmX6wiG7xr4y6v6bFs+BXgT9ZNjTL7LIvmPpa6cofhZ0nPjm970to+Qd1XyoXh9xPe3w5NADAJO7aXx8E+wOI5f0r1u+jLEPtuyi597QKAmeHvBSal7PP5FyyaU29fOva38LLnCezDNOwGDlK59lKvGYD+JBmmcP/Ft+smi4g0nvoJALqf2ZdRlzJ/7OzGuaBOBhVLWXTxtaks+v2X/BH4dlqGpWSCA9V9pdz9lz4HPJTgEu43hIHmFE+8/MssvvjWuqijme7ZwCvpufT2Vmq1g7HZR1N2N/9BV8tHaYQNmu67+C6cryNSjrAeMwBtCcP8YBbOeUI3WESkMeXYBCSVg8N7N+6sm07bPz0PeCrldamXbPA/qZ5cZPxS0pIFGIaaehuiAAAhf0lEQVQKANYFvznRnw8evHWoLkxKb+jvWDa8vW6q58IrXga/IkUlnsD09tdW/SzTzt8NvC1dXY031qN+nu0A/qnPGCmZ1VkA0FlApuVY7r5kpW6uiEjjCnJ8QKTtAy8EOyfVd+GGG7LApekeKHEtSy9+PN2T3bl/w/l5Si74vuq+6qEHTviC9RYeMGRTlfQJCfhUonc+L0X38GuAFem5C1b9OuvZj1KrTMOKtGO/jiVz72iovvX+S1eDn6kPGSljXFs/j5E7i2kadhwLO9foxoqINPj0M+ckJl1+yOKLH039nRjR8yMgrR/ML9ISfr5O2sSVKRmYKgBYD7o3PAz0JLie7TVEZ07jxOta7pvzQN3V0Yc6V+F8I0UT3TfU4CwfTNH1eIGe4Y0ZCFs89+cke5kFSbKwbtYAfBrjRBZ2btBNFRGRtD8CvAEPz6+LO3Hn5WvBb0xn4f1rdfNIwZI5DwHJX7zfeT0zZ2bUhaXcA1etB38muQW01w9ZDU+XlWS6L6jbehoE15KeoGx1MwBb2ycDu6fm3pl38kDnsgbtYR0Lz9UHjZTWduriEeDluB/F4jkv6YaKiAik/RFg41ssueQfdTRU/X4KS70e7Bt11SqMH6eglCP49+t3VRdWFxUuybuA7z1kvWGq+m6/rG+9vDq16KJ/AgtT8jla3axVC05M0Z37G8uG/y+NbNEli4D79TkjpXTsdTC++DRL5j6jeykiIq8KUl36bPiturobS4YvAtL2Ld31dffNYm/mx6QhAJEJd1UXVhf+neCyjWfK2dvoFhW0iuH+tfqfC3N9Oua77Aqd1RvbuL8rPffMvlB3a1KW5su6BFJCnxemvPzfZPHFP9GNFBGRLaU4AGhLuP+SP9bX7egMce5K1/Ao/ErdtYqlFz4N/C75TcB3VRdWF5OMZD8+39z8et2kgr7RELsq9gz7GZCGYNJwpvXsWJVXnnbu3kO4LmbcD4g/s/1ff6jmCWz31C+Av+tCSAP5F03DztZlEBGRgdIbAHS+Xaf3JEU79dkT9ReEfbV++d3JL6Ptoi6sDpivSnhfu7tuUoGr4/7NhninD3WuAtKxyYmH1amznjk6Rf3KFdxwQ1ZNFLjhhixm1+tCSLw2lOIMQPeztOOviIjkktYA4Eqy62+ozwGH3Z2i0tbvujoe3JOCQu6qLqwe6lrCMwCdbXWT8l6buxtrfSWfn5L7snOVXvnIlNyoFQzv0aN//fQqG1JijsdJ6xqAd7Nk7g26gSIikktKA4D+i77dM+vQ4ov/A/wrHYMjX1K3LaO5ZTHQk/BSKjBTF72wrU12d+taAzC/HzdYZU1HANBsu4q/5rGnDgMOTccQyb/PnZevVfPcwqJL/wz8XhdC6p5zvi6CiIjkHc2nstRhMK/O78vD6Shm9td1ewcWdq7B+G3CS6kAoFSfmQKA+aZZnp3fUO94ccvjwOoU3JrKBwBXjzoEGJWOetn0dTXPnJfmDl0DqXO3sWTOQ7oMIiKST1MKy7ycDS/fXdd3xf1hzN6Z8FKuZ9tn/1Lf98EeBz8wwSVUYCYtpneOp3eDbfrvMDOWIJvZ+F9bJ7z0CjTn9nvuv/S5xnrLnSHM/i14a8ILun0VXnNqOj63WML9Fz6p5plDENxF6OfoQkj91nEu1EUQEZFC0hgAfIBHvtVT5/flT6mY/Nb7AuPG4wlfAWZr6Az6JuVSVYd0TsS6d6bJd8ZtIvh4YALGeJwJwASw8eBb/mzkpr/PdoFtjv+RCQF7dcKe9HagQHNu9zfku/bwEcySHgCsfFDdbEo6AgD2MzXNPLrXL6FpeA/QrIshdei33DfnAV0GEREpJIUBQH+w7u9K4E/hlvDb0ABr6bg/nvj2ezCjeYhVSHkOOW9HWsLdybIr+M4Ewc4QvmbjTsu7QNeojfWefhE7798oBv+sHtoBW6mC5LwuTzTmGw8eTUElH1fh1zPgramolWH2F2qceTxw1XraOv4K7KOLIXXH0KP/IiISIYCQvg+4+l/bYu2IpxnZ5WxKEUrkfaj/nS/d/9QvayuRc/GeMaAAYGSTT25m+ITXYZnJBOyD+77AgRBux6akPANPdvOrsZG6BLnanjdmANDtL1jCA4DOmIq+XlvH3sDEFNydR1lyyT/UOAuNXeyPuCsAKPVmHdnsj3QZRESkmPQFAMMGmHQ90rmOto7nqc46RhWaYPmzdX8flsxdTlvHCmB8Yss4LByD5Da9czi96w/Egik4k4EDMPYEMuD1l6lXxVqmS5BDb9PTDfm+veuZxD9BaRXOADR/U+Kz8vs+l5X9V9xfdAmk7pjN5/5LV+tCiIhIMWkLAPay/TP/bowPc17AExwAzNjfGuQ+/A3njQme8CkA+KpDzhxB87A2nCOAqWS7DsSClo33UUqnAGAu2aaXGvJ9L738Rdo6VgNJ7nvGVraf5Q2puDeema+GWfQi/VPXQOpOqOC/iIhEk7YA4L/qfuOJTR/mvJTooIV5Y0x+nb9BggOAWUY1dA/W1rEP7m/H7EhgKs5wdetV+JyY3tnEws5eXYpNenios5GzLZ4FDkhw+SoctLb9U3BP1tDc/LiaZlEKAEq96SU77FZdBhERiTaxSxPz5xvmzhgvJ7p82WBtg9yHfyT6UdFM0GC7GXYGtK6fggUngJ8A7Jn4dRrrQcuaYYACgJu9QmM/RP5iCsY2VsF7lPwMQOcBBekjfaYv1/IPUmd+ywOdy3QZREQk6iA5PdzWNdgEM7nC3jUNcRfcX07086O9adzJuwRTZ+1LJjMT7/oQBLu/OpOTGlnX1AKs1YXYfEUa/P2/kvgSTj65iUe+1VP260zvHE+2a/vEv19jiZpllM/0cA0Eug5ST+NUtX0REYksbcGDBpp0+fpEBzh2eLYx7oUFy/p2hE2ojNdvBuARs8axwT6A2cnAGxJ9H+pd2Nusi7Bl90x3g7//l5Mff9+hGSg/ANi74bWpyDI2BQGiaV4DWV0GqaNxqqnti4hIZGkLAG5onA/0oDvRAY8b9nW4of7vQxguS/jkr/4yAKfMfiOBf4Yu3os1+BqHklSN/ail2bLEPwE9YX1lgtYBe6TikdGe4Y+rWUbg2TW6CFJfddof1UUQEZGo0hY8aJyvbT3s0iOOSZjoBsme6IaeqZtr3TqrFQtmgR+PKr8kWdDoAUBf1zDrqIXskYLe6HmtARZR74Y1NGmvKKkbXWz/9N91GUREJKomXYKEcroVAknCRNdW69HT6l5hpnW8HbgAT/BuyyL9++fG7hTCBvp8Ctg98Xfb+bMaZUQPjOuirUvXQerFU9xwg55pFxGRyBQATCozRZ0ScR+yPbgisVXRNvto8C/hHKSLIZKmftG7GyZJ123HFJTyT6qUIg3IeVIXQURE4lAAUKSQrHenYgH4NGnteB3GVeDH6WKIpHLS2UgZ6tslvoSBKQNQpBGZKQAoIiKxKAAoUnBi5d0oF7MyDu4cS8uGTuAzgHaVFUmvxlkD0dku+cFOf1ZVUqQh/UWXQERE4lAAUKTgNLelm4yWVylba/sxWNc3wXbWxRCRVJg5M8PzbJX4cro9r5sl0oACtAGIiIjEogCgSCEtvVmyegS4ZK3tEzD7CvAhXQwRSZV/7zKJDMnfab3XXtDNEmlA3qvgv4iIxKIAoIhUx6HtBxHaT4DddTFEJH0jpOHj8MRngIcMa1YAUKQRhYECgCIiEkugSyAiFWa0ts8itKUo+CciaeXhmBSU8mUWdvbqZok0Xg/FkrkrdBlERCQOZQCKSOVM7xxOtus7wAd0MUQk5fPrFAQA7RXdJ5GGtAG0TZ2IiMSjAKCIVMbUc3cg23UTcJAuhoiknjEu+dNrX68bJdKQ1PZFRCQ2BQBFpHxTz389QfYu4DW6GCJSH3wEJH0TKN+g+yTSkLp0CUREJC4FAEWkPG0d+0D2LmAHXQwR0RiphtwUBBBpTHr8V0RE6nBwKyLJ1TrrDcC9wERdDBGpK2GQwRI+xw6UASgiIiIiEYeOugQiUpLp7XtgwR0o+CcidckzyS+iMgBFREREJBoFAEUkvunn7kTW7ga208UQkbpkqXhKQuM4EREREYlEjwCLSDyHnDmCbOYmYJcGvxLrwP8J9m/M/4Xby+ArIFiB+wpgOfgGMraWrHdjgePhihzT93EQnIj7eapcIhLTcF0CEREREYlCAUARiScz/DvA5AZ5tz3An3GewHgC7M9Y+CQhf2PJ3OUVO0tr+0GYqW6JJInTS/Kb5TDdKBERERGJQgFAEYlu2uzTcX9/3b4/4984D+A8QBA8SND8KAs7tci+SCMy60nBRpvKABQRERGRSBQAFJFops7aF/c5dfaussDjmN1CGN7M4rmPkoIZv4jUgIU9eOJTABUAFBEREZFIFAAUkeKmdw4n2/VjYEQdvBvHWULAd2kJb+LuS1bqBovIYNaTgkKO0X0SERERkSgUABSR4rLds4H9U/4uXsL5LvA9lsz5i26qiBTma0j+IoDb6z6JiIiISBQKAIpIYdPb9yDr56T4HbyE2bV0tVzJQ52rdENFJJLQVqZgE5ARHDFrnDKZRURERKQYBQBFpLCsXUM615laAVxA74Zv8sBV63UjRSTmCGkl2RSUszfYHlAAUERERESKDG9FRPKZ1n4UzlEpLPktZLKnsPDSf+kmikhJerKrCDLJL6fb9sATumEiIiIiUogCgCKSj+F2YapK7LwAfgpL5v5Ct09EytI8chnZruSXM+s76WZFNPm5DEzSdRAREZGGFOgSiEhObbPeARyUohL/jjA4WME/EamIhZ0bgOWJL6fZ3rpZEU0a26KLICIiIo1KAUARydc9pGnjjzsYFk5j6UV/130Tkcqx55NfRt9X9ymidU0KAIqIiEjjzvB1CURkkNb2ycDUVJTV+RHbPfU27YIpIlXoYJ5LQSEVAIx8O8MRuggiIiLSqBQAFJFcPcNp6ZjMsYDlw/6LG27I6qaJSBWkIQC4G5M7R+pWRZAxLQAoIiIiDTzNFxHZ0lFnj8LtxBSU9E/gJ/LHzm7dNBGpkmdTMZYb2bOfblUEHkzURRAREZFGpQCgiPS3rvndwKiEl3IN2cw7WDJ3uW6YiFSN81QqymnhNN2sSBdqe10DERERaVQKAIrIgPkRH0jBrPwcll74tG6WiFR3lBSkpJ9xBQAjfb75HroIIiIi0rBDW10CEdlk6rljgBkJL+VjLB7+Ld0sEak6D/+ajnJaG3RqTFf0OqEAoIiIiDQsDRZFZIsewQ4DWhJexlnQGepmiUjVLZ7zEvBSCko6nmkb3qAbVtT+ugQiIiLSsNN9XQIR2SxzTMIL+Cj3XXyX7pOI1NDvUlFK5xjdqgKmd44GDtCFEBERkUalAKCIbCFM+OO//nXdIxGpcb+TjgAg9h7dq0K3sfsgoEkXQkRERBqVAoAi0qe1fQLY6xJcwg1kht+oGyUiNR4qpSQAyJuZ3q417vIJE7++rYiIiEh1R7W6BCKysTc4CLAEl3ARCztX1OW1N/XFIomV4eHUlLWXE3XD8vWz4ZG6CCIiItLYU34REYCQg5I9ebM767grHqEKKJJQC1v+BKxIR1di79UNy2F653jcDtKFEBERkUamAKCI9DF7fbLL57+u34vvY1QBRZKqMwQeTEdXwhuZdt4U3bMBst1vAzK6ECIiItLIFAAUkVclef0/Z8Ow39bvpbftVf1EksyXpqeo4am6X4Muygd1DURERKTRKQAoIq/aM7lFs1d4qHNVHU9Od1L1E0kw8/tSVNoTOeS8HXXTNpp+znbAEboQIiIi0ugUABQRmN45GpiY4Mn3v+r8DuyjSiiSYGuXPwCsTklpm2kKP62btlFv5r/R478iIiIiCgCKCNDdu22iy+esrNtrf3DnWGA3VUKRBHvkWz1AmrIAT9uY+dbYjj11GGafUQUWERERUQBQRACafNuEl3B93V77YV2tgKkSiiRdqnYiH01v0/kNf8tWj/oIoECoiIiICAoAiggA4VbJnne71+2ld45U/RNJgUx4c6rKa3ySaefu3bD3a3rncMxmq+KKiIiI9FEAUETAbWSyyxeMqtMrb8A7VAFFUmDh3L9hPJ6iEjdB00UNe7+yG84EdlHFFREREemjAKCIgNOS6PKZj6zL697WMQXYXRVQJC19pf88ZeV9F9Nmn9Rw92n6OduBtavCioiIiGymAKCIgPmwZE9i2bZOr/wnVPlEUiRMWQCwr/+8puE2BMk2fRMYqworIiIispkCgCICeCbhBdyRfTtb6uqSH3LejsD7VPdEUuT+S/4I/DZl/ftWZJu+3TD3qLXjv0jz0gqmsbmIiIhUhwYZIgJuaxPfV43v3a2urnlTeDbQosonkrb+kutSWOq30dZxRt3fm6nnvx7jyymvXxqbi4iISJUm1SIiAWsTX0bLvqVurndr++7AKap4IinUYz8EelNY8iuY1lG/mw5NPXcMQfbnpP3RX0t8Rr6IiIikdtovIoKvSf6kyKbUUc/7ZWCY6p1ICj108Qvg81PZ8zjX0zrrDXV3T6Z3NhFkfgLsk/6PY43NRUREpFqDQRERMskPAOJHAZb6S93a/j7c3q46J5JiZtemtORjsOBmprfvUTf3YubMDNmu64Dj6qNuaWwuIiIi1aFBhohAkH0uBaXcnUPbD0z1dZ5+7k5Y8FVVOJGUWzTsDuDplJb+NWRtEdNn75f+G9EZ8Pwe36aeNlQK9QiwiIiIVGnar0sgImz99D+B7uRPjOxDqb3G+3a2EAY3gG+VurK3mD4rRPrpDHGuTfEb2J6sL2LqeW9N7Ts49tRhtHb9GPivuqpaygAUERGRKtEgQ0Tghhuy4M+moKQf4/COSamc0k3a8HXc0jnZ7lEAUGSQ4eF3gZUpfgcTCMI7aZv93tSVfMrZ27Bm1L0YJ9VdvdIagCIiIlIlGmSIyKueSkEZR9HFGam7sm0dF+L2sdTWjEyzHkkTGejuS1YC16T8XYwB/zFtHdcxuXNkKkrc2j6dTPNjUEcbQ23J9IWLiIiIVIcGGSLSx3kiHZMjzk7VAvZt7Z8DZqf7kyKrAKBILtmerwDr6uCdfIiRXQ8yZfYbE1vCQ84cQWvHHMzuAXao2zplpv5WREREqjOt0yUQkb7ewJampKTD6bVvMXNm0idJRlv7pWBfTH3d6G7ShFQkl6WXvwh8q07ezf5k/GGmzf4mU87eJlEla20/hqbhv8dor/uxqx4BFhERkWpN+XUJRGTjpGMx4KkoqzGD5/dIbmDtqLNH0dYxD+yc+vikUAagSAEXA6vq5L1kcD+ZTPNfaJt9DlPPHTOkpZl63ltp67gDs9uB1zbIh7H6WxEREanOtE6XQEQAWDznJfC/pKjEHUzr+GTiStXWsQ/rm+8H3lM/nxQKAIoU7ju5os7e1TjwSwky/6Kt42qmd+xVszPPnJmhteNttHXcQRA+ABzdWBXKm9WoREREpBqadAlEZPO8w5ZgvD4lpTWca2ltz7Bk7rVDX5zOgLau0+jLBhpRV/Ui0CPAIgVlhl1JtusUYLs6e2djgc+Q5X9o7VgI3EST38bCuZXeNMpom/0m8BN4no9i7NzAn8MtalAiIiJSDQoAishmAb/C+e9UldjsGqbN3pdXWs7kj53dQ1KKaedNwbu+Ckyuy3rRqwxAkYIWdq5hWkc7zv/V6Ts0jBnADLL2Fdra/7rxsdxHyQZ/pLn5CRZ2ron8ajNnZnhh931wOxjjENyOAt9JFQkwG6aLICIiItWgAKCIbDZqzXzWjF4JjEtVud0/zYSuabR2fJwlcx6q2XnbZr8Z9/Pw8F2A1e+ENKMAoEgxi+ZcR1vHJ4Cp9f9mbU+cPQEIQsh2OW0df8d5lsDXENpqYDWBrcDDAAvG4eFIsO2A3XienYG+R11dVaf/pQ2VASgiIiJVoQCgiGx2+9VdtHXcBHwkfZMm9gOW0tZxA5a9gEWX/rkq55l8cjMjJr4Ns0+CH13HYb8tL64+K0SKc7L2GTL+MNBoQXMDdsXYFbfNX4e49/3q1X9KhFqkR4BFRESkOjSpE5GB07h5eAoDgH0C4P/hmZNo67gX9+/SM/xWHuosb4fOQ84cQfPwGWDHE/qJGNs2Vp3oHa6GIRLB0osfp63jCuBcXQwpiaMAoIiIiFSFAoAi0t/aV+5i5KR/Aq9J8bsw4HDMDqelq4e2jqVgS8EfJQz/TPOIf7Owc0XOv5t67vYEmd1wdsd4M3AQ8GacEeCNmcQS2kg1DJGIRq/5PGtGHw/sq4sh8T+9XGsAioiISFUoACgi/T3yrR7aZl8NfmmdvKNm4FDwQwEIAsh2QVvHOqALWAWMBIbRt+PlxkmYqsImgQKAIpHdfnUXU8/7OEG4hMZ7FDhNVuMcifFgokqlR4BFRESkWtM6XQIRGaS75ZvAyjp/lyOBCcAuwNZsGfyTgRNSBQBF4rj/ogcxu1AXIsnsSxs3jVqfrGLpEWARERGpDgUARWSwvjXzvqcLIQB9u3eKSCyLWr4I3KMLkUhPMXr1Vzf++4pElUyPAIuIiEiVKAAoInkmIcGVJC0zQoaoLigDUCS+zpDe4CPAS7oWieK4n8LtV3dt/O/lySqdKQAoIiIiVaEAoIjktuiifwKX6UIIfY9Li0hcD1z0bzx8N9Cti5EY17Bk7t1b/PfyhJVPjwCLiIhIVSgAKCL59W6YC/xDF6LBOSN0EURKtOSSJbifqQuRCE+TGdYxoINbkbAyqr8VERGRqlAAUETye+Cq9bh9TheiwZkyAEXKsmTutZhdqwsxpLoheD8LO9cM+HnCHgFmlG6ViIiIVIMCgCJSZOLacj1wry5ETWZ+twIvJq9YmpCK/P/27jZGrqoM4Pj/3NndKS2JGIiiGCJSIQKJIKIg0BSBUiMgQVaNGGOCIMEgEAhWIXE+0JldQTFgNLxo0ASNWYMGiI2k6nZm6RvQKlLTV4xgwVpatlC2y3bmHj+0igptt907u6e7/9/XuTP33OfcOTvn2eeeM2bvXPc14JcGYqLGsXgtjfnL3/xCGEyqncHxVpIktYcJQEn7UMlpZl8EthiLtvoujZ4LiSxMrmWBw+weaYz6+lpsLV8OCX7HJ78fMtBz7x4GuNTWAJwOBLtMkiQVzQSgpH1bMn8jgasMRJuEuIAj19+8a1QO6xJs4eF2klSAVZURyvllwHKDMU4if2Br+fq9HJFaAjBjzk0uuyBJktrwI0OSRqNeewjiAwai8NnpYqY1u+nrawGQ52sSbKQJQKkoC3u3Uc7nEOJSg9F2f6KjfCmrKnvehTkmtwkI7Og0AShJkgpnAlDS6DVfvwbiYgNRmKeJXMhjd7z2xmS0lGIF4BF2lVSghb3b6IpzgSUGo13iGuB8+iuDez0sJFcBCKF0qP0nSZKKZgJQ0ugtuXMHhEuA9QZjzFZQGjmXgZ7/nXw2O9cm2FYrAKWiLezdxlD5POBRg1GwyGpK+Xk0apv3fWyCFYDsNAEoSZIKZwJQ0v5p1DbTKs0lxd1qD57JaYNy/nH6v/PSm15bVnkF+EdiLZ7OGTccYsdJBXuqMsSR6y8hco/BKMwKArPo//bfRzkgp1cBmGc+AixJkgpnAlDS/lt82wYiFwODBmM/hfArdpTnsrB3214OSq8KsNxpFaDUDn19LQZqV0O4GWgZkDHpZ6R8zqgq//4t70jv71gIVgBKkqTCmQCUdGAGasvI87OAFwzGaCd13EW96zKeqgzt48j0EoDNYAJQaqdG9XbgXGCzwTiQ8TXcy9byBburqEev1ZngGoBxhh0qSZKKZgJQ0oF7vHcVkXOA5wzGXr1KjJ+nXrsOKvkojk8vARhKbgQitVujtohQ+qg7BO+XEQJXU69+Za+7/e7JssqrJFd5aQWgJEkqnglASWMzUFtLzM8GnjYYb2klkQ8z0PPz0b+llV4CMObvsCulcVC/7a9k084GqkBuQPY6MK0jMot6bSxrKEZSW84iWgEoSZKKZwJQ0tgN9D5Hc/h0QvyxwfiPJiH0cuj2Mxio7WdCL1uX3NWEcIxdKo2T/kqTRu0WMmZDXGNA3tJ9HNI8hYHasgI+K7XHgE0ASpKkwpkAlFSMJXfuoN5zBYEvAUNTOhaRZ8jix6hX57Hg7tf3+/2Hbt9Aeo+kmQCUxtuiWoPStJMJYT6w04AA8CyBT9KoXcVjd7xWzPBmBaAkSZr8TABKKla99hPy/CNTdA2rQeAGdmz5EIt6njjgT9mVNPxbWpcW3+vNLU2A/sow9eqtRE4ihL4pHImdBO6iVP4g9dpvCv3kPLEKwJCZAJQkSYUzASipeI/3rqI+7UzgKmDLFLjiEUL4AXAcjdr3eOreIip1UlsH0ApAaSIN1NZSr34Gwlym1pqrOZGfUYonUK9dR39le/G/hsNgWpcc3QREkiQV/5PHEEhqj0pOo3YfXRwP4X4m52L2OyHcTys7jnr1qzRqmwv87NTWATya7u6S97U0wRrV39KonUzMLgZWTOIrjcCjtMKpDNQup79nfRvPlVgFoI8AS5Kk4pkAlNRev6ttoVG9ksgHdm8SMjIJrupliLfTyt5Po3oli+e34XHdmFoFYCcbj3uPN7SUhMjA/EdolE8j8Cng95Po2oaI3AOcRKN2EYurf2x/NONgWr0bTABKkqTCdRgCSeNi1064VzDrlgp560ZC+DIH306HS4jxAaY3Hyxs8fk9CawlJnb1WesYklubUJrKKjl1HgYeZvY3T6IVrwE+B7z9ILyYv0B4gGbXj1hS2TquZw68nNZ46yPAkiSpeG9OAMbwfcjflWRrQ1w9ZXomsgjivIQnHXFqfEPiyzRJtx86wp8PupjW5z8PXM95X/8Ww9mlBC4HZgOlRL+Lqwk8RF76KY/ftmbczpvtXEGzM617L8s3jdNk/FbymO7jxiHbxFQWsieJ+byk29g5NDzl+qW/+gxwDZ+49gZenXExIXwBmANMS/deYiORX0B4kEZ14h5nbuWPEMLWhL5jG8f5jDcS6Ux4zBn/vsnjI8ALycYky7ajN/T15Zz1jesSn9w9b0dJmvifXpI00c68+d1kHZ+F+GngNKBrAluzA1gMPEbk17srFyXp4DPnphkMd15AjBcRwvlEjprgFrWApcS4gJAtoFFdCUQ7SpIkqf1MAEpKy6mV6cwYPh2yWeRxFoHTgUPaeMZnIawk5isphTrTty9nwd2v2xGSJp3Z82bSYjaBM4jhFOBE2vsPlxcJ8UlylhGypYx0PcGyyit2hCRJ0vgzASgpbd3dJTYdfzR581gCM4nMJGQzCfEoItPZlRw8jF3rCf73RHaYXdV824BNEF8CNgPPErIN5HED0/LVLOzdZpAlTUknVrp428gJlPJjIRxL5H0EjiLEI4jhCODw3WPs/z9G/BowQmAIeJEYN0H4J5GNZKwnZzUd5TX0VwYNsiRJkiSpWLMrHVBxd3NJasf42t1dMhCSJEmSJEmSJEmSJEmSJEmSJEnj5V9sA4gBSduN9gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wNi0xMVQyMjo1Mzo0OSswMDowMO6vib0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDYtMTFUMjI6NTM6NDkrMDA6MDCf8jEBAAAAAElFTkSuQmCC" alt="Bank Mandiri" style="height: 40px; width: auto;" />
      </div>
      <div class="bank-info">
        <div class="bank-name">BANK MANDIRI KCP BEKASI KOTA DELTA MAS</div>
        <table style="margin-bottom: 0;">
          <tr>
            <td style="width: 100px; padding: 2px 0;">Atas nama</td>
            <td style="width: 10px; padding: 2px 0;">:</td>
            <td style="padding: 2px 0;">PT. BERKAH SELARAS TEKNINDO</td>
          </tr>
          <tr>
            <td style="padding: 2px 0;">No. Rekening</td>
            <td style="padding: 2px 0;">:</td>
            <td style="padding: 2px 0;">156-00-1363125-6</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="prepared-by">Prepared by</div>
    <span>Linda Rahman</span>
    <div class="signature-line"></div>
  </div>

</body>
</html>
  `;
};
