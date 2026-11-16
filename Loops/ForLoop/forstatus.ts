// interface ApiResponse{
//     status: number;
//     message: string;
// }

const responses= [
 { status: 200, message: "Success" },
 { status: 400, message: "Bad Request" },
 { status: 500, message: "Server Error" }
];

for (const response of responses) {
    if(response.status !== 200) {
        continue;
    }
 switch (response.status) {
 case 200:
 console.log("API Passed:", response.message);
 break;

 case 400:
 console.log("Client Error:", response.message);
 break;

 case 500:
 console.log("Server Error:", response.message);
 break;

 default:
 console.log("Unknown response");
 }
}