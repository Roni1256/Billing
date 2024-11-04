export const useInvoiceNumber=()=>{

        const today = new Date();

        const year = today.getFullYear();

        const month = String(today.getMonth() + 1).padStart(2, '0');

        const day = String(today.getDate()).padStart(2, '0');

        const hour = String(today.getHours()).padStart(2, '0');

        const minute = String(today.getMinutes()).padStart(2, '0');

        const second = String(today.getSeconds()).padStart(2, '0');

        return `${year}${month}${day}${hour}${minute}${second}`

}