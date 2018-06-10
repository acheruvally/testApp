$.response.contentType = "text/plain";
var connection = $.hdb.getConnection();
try
{
var result = connection.executeQuery('select * from "employee.master"');
$.response.setBody(JSON.stringify(result));
}
catch (e)
{
$.response.setBody(e.message);
}	