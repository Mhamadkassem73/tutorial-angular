export const parameters = {
    password : /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/,
    debounceTime : 400,
    keyupTimeout : 1000,
    gridPageSize : 10,
    chaletTerrace : 10
}
export const periods =
[
    {code:'toDay'},
    {code:'thiMonth'},
    {code:'thisYear'},
    {code:'qr1'},
    {code:'qr2'},
    {code:'qr3'},
    {code:'qr4'},
    {code:'thisQr'},
    {code:'lastQr'}
];


export const transactionScreens =
{
    'JV':'journals',
    'PV':'payments',
    'RV':'receipts',
    'DV':'debitNote',
    'CV':'creditNote',
    'DN':'charging',
   // 'JS':'sales-jv-js',
  //  'JR':'sales-jv-jr',
};



