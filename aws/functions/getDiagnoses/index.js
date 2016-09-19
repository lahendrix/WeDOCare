var aws = require("aws-sdk");
var dynamodb = new aws.DynamoDB();

exports.handler = function (event, context) {
    var params = {
        TableName : "Hendrix_WeDoCare_diagnosis"
    };

    dynamodb.scan(params, function(err, data) {
        if (err) {
            console.log(err)
            return context.done('error','reading dynamodb failed: '+ err);
        }
        var formattedData = [];
        console.log(JSON.stringify(data.Items));
        data.Items.forEach(function(item, index) {
           var formattedItem = {};
           formattedItem.patientId =  item.patient_id.S;
           formattedItem.diagnosisDate = item.diagnosis_date.S;
           formattedItem.description = item.description.S;
           formattedItem.notes = item.notes.S;

           formattedData.push(formattedItem);
        });
        console.log(formattedData);
        return context.succeed(formattedData);

    });
}
