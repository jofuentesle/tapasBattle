// getting-started.js
const mongoose = require('mongoose');


const dbConnection = async () => {

    try {
    
        await mongoose.connect(process.env.DB_CNN);

        console.log('DB online!');

    } catch (error) {

        console.log(error);
        throw new Error('Error conexión db');
        
    }
    
}

module.exports = {
    dbConnection
}

If(
    Last(
    Split(
    Gallery5.Selected.'File name with extension',
    "."
    )
    ).Result = "pdf",
    "appres://datasources/Documents/table/b88cea67-ff4f-4ac7-b3d7-10178bab90ce/rows/0/reference/https:%2F%2Funitedstates-002.azure-apim.net%2Fapim%2Fsharepointonline%2F5e6ba50034934fc79b1e8878c9298ce5%2Fdatasets%2Fhttps%25253a%25252f%25252fbarcelusaminsait.sharepoint.com%25252fsites%25252fBarcelUSATrial%2FGetFileContentByPath%3Fpath=%252f" 
    & 
    EncodeUrl(Gallery1.Selected.'Folder path' & Gallery1.Selected.'File name with extension'),
    Substitute(
    Gallery1.Selected.Miniatura.Large,
    "/thumbnail",
    "/pdf"
    )
    )

    If(
         = "pdf";
        "appres://datasources/Documents/table/b88cea67-ff4f-4ac7-b3d7-10178bab90ce/rows/0/reference/https:%2F%2Funitedstates-002.azure-apim.net%2Fapim%2Fsharepointonline%2F5e6ba50034934fc79b1e8878c9298ce5%2Fdatasets%2Fhttps%25253a%25252f%25252fbarcelusaminsait.sharepoint.com%25252fsites%25252fBarcelUSATrial%2FGetFileContentByPath%3Fpath=%252f" 
        & 
        EncodeUrl(Gallery1.Selected.'Folder path' & Gallery1.Selected.'File name with extension');
        Substitute(Gallery5.Selected.Miniatura.Large;"/thumbnail";"/pdf"))


        https://northeurope1-mediap.svc.ms/transform/pdf?provider=spo&inputFormat=pdf&cs=N2FiNzg2MmMtNGM1Ny00OTFlLThhNDUtZDUyYTdlMDIzOTgzfFNQTw&docid=https%3a%2f%2freprodisseny.sharepoint.com%3a443%2f_api%2fv2.0%2fdrives%2fb!XMuFtmukIEu7QextjwbC0WS1OxWaQ4xIknYCsIdwf9_CyOktuEndR63I-EiuRqFv%2fitems%2f01UWCPJP52UHPBPNVNLRBIBIK3LBUU227A%3fversion%3dPublished&access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfZGlzcGxheW5hbWUiOiJBcHAgU2VydmljZSIsImFwcGlkIjoiN2FiNzg2MmMtNGM1Ny00OTFlLThhNDUtZDUyYTdlMDIzOTgzIiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL3JlcHJvZGlzc2VueS5zaGFyZXBvaW50LmNvbUAxN2I1MTBhMi01OWQzLTQ1MTctOWViYy00YjZkMTUzZDk4ZWEiLCJjYWNoZWtleSI6IjBoLmZ8bWVtYmVyc2hpcHwxMDAzMDAwMDk2NzFlYTkyQGxpdmUuY29tIiwiZW5kcG9pbnR1cmwiOiJPQkpKZUNiSWhxakxUVWptV2g0SzRvNnFhZ0hGcG52aExWQkovZWJSRXpNPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTE5IiwiZXhwIjoiMTcxNDI5NDgwMCIsImZhbWlseV9uYW1lIjoiRnVlbnRlcyIsImdpdmVuX25hbWUiOiJKb3JkaSIsImlwYWRkciI6IjIwLjg2LjkzLjMzIiwiaXNsb29wYmFjayI6IlRydWUiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNzE0MjczMjAwIiwicHVpZCI6IjEwMDMwMDAwOTY3MUVBOTIiLCJzY3AiOiJhbGxmaWxlcy53cml0ZSBhbGxzaXRlcy5mdWxsY29udHJvbCBhbGxzaXRlcy5yZWFkIGdyb3VwLndyaXRlIHNoYXJlcG9pbnR0ZW5hbnRzZXR0aW5ncy5yZWFkd3JpdGUuYWxsIGNvbnRhaW5lci5zZWxlY3RlZCBkYXNoYm9hcmRjYXJkLnNlbmQuYXBwIGNvbnRhaW5lci5tYW5hZ2UuYWxsIGNvbnRhaW5lci5tYW5hZ2UuYWxsIEFkbWluaXN0cmF0aXZlLk1hbmFnZSBBZG1pbmlzdHJhdGl2ZS5SZWFkIEJhc2ljUHJvamVjdEFsbC5SZWFkIEJhc2ljUHJvamVjdEFsbC5Xcml0ZSBFbnRlcnByaXNlUmVzb3VyY2VzLlJlYWQgRW50ZXJwcmlzZVJlc291cmNlcy5Xcml0ZSBFbnRlcnByaXNlUmVzb3VyY2VzLkJ5cGFzc0RlbGVnYXRlIFN0YXR1c2luZy5TdWJtaXRTdGF0dXMgUmVwb3J0aW5nLlJlYWQgZmFzdFNlYXJjaC5xdWVyeXNwIGFsbHByb2ZpbGVzLndyaXRlIHRlcm1zdG9yZS53cml0ZSIsInNpdGVpZCI6IllqWTROV05pTldNdFlUUTJZaTAwWWpJd0xXSmlOREV0WldNMlpEaG1NRFpqTW1ReCIsInNuaWQiOiI2Iiwic3RwIjoidCIsInRpZCI6IjE3YjUxMGEyLTU5ZDMtNDUxNy05ZWJjLTRiNmQxNTNkOThlYSIsInR0IjoiMiIsInVwbiI6ImpvcmRpQHJlcHJvZGlzc2VueS5jb20iLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIn0.REkK-9b5RMsoKd5C48tlrN_YpMLkwhmHew_K-NYupvo&width=96&height=96

        With(
            {
                fileextension: Last(
                    Split( Gallery5.Selected.'Nombre de archivo con extensión'; 
                    "."
                    )
                    ).Value
            };
            If(
                fileextension = "xlsx" || fileextension = "docx" || fileextension = "ptt";
                true;
                false)
        )

        https://reprodisseny.sharepoint.com/sites/Test-Servidordetreballs/Documentos compartidos/general/medico.jpeg
        