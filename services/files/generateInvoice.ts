
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CartItem } from "../../types/cart";
// Date Fns is used to format the dates we receive
// from our API call
// import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (order: any) => {
  // initialize jsPDF
  const doc: any = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Id", "Name", "Price", "Qty", "total"];
  // define an empty array of rows
  const tableRows: any = [];

  // for each ticket pass all its data into an array
  order.cart.forEach((ticket:any, index: number) => {
    const ticketData = [
      index + 1,
      ticket.product.name,
      ticket.product.price,
      ticket.quantity,
      // called date-fns to format the date on the ticket
      ticket.total
    ];
    // push each tickcet's info into a row
    tableRows.push(ticketData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 40 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text(`Order Invoice - ${order.id ?? new Date().getTime()}\n
  ${order.contact.firstName} ${order.contact.lastName}`, 14, 15);
  // doc.text(`${order.contact.firstName} ${order.contact.lastName}`, 28, 15);
  // we define the name of our PDF file.
  doc.text(`Total ${order.cart.reduce(
    (a: number, b: CartItem) => Number(a) + Number(b.total),
    0
  )} XAF`, 14, doc.lastAutoTable.finalY + 10)
  doc.save(`invoice_${order.id ?? new Date().getTime()}.pdf`);
};

export default generatePDF;
