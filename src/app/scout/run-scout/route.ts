// export async function GET(request: Request) {

//     console.log("KEY",)
//     const crunchbaseBaseUrl = `https://api.crunchbase.com/api/v4/searches/organizations`

//     const requestBody = {
//         "field_ids": [
//             "name",
//             "linkedin",
//             "image_url",
//             "twitter",
//             "website_url",
//             "short_description",
//             "identifier",
//             "location_identifiers",
//             "short_description",
//             "rank_org",
//         ],
//         "order": [
//             {
//                 "field_id": "announced_on",
//                 "sort": "asc"
//             },
//             {
//                 "field_id": "rank_org",
//                 "sort": "asc"
//             }
//         ],
//         "query": [
//             {
//                 "type": "predicate",
//                 "field_id": "location_identifiers",
//                 "operator_id": "includes",
//                 "values": [
//                     "kenya-9f51"
//                 ]
//             },
//             {
//                 "type": "predicate",
//                 "field_id": "facet_ids",
//                 "operator_id": "includes",
//                 "values": [
//                     "company"
//                 ]
//             }
//         ],
//         "limit": 10
//     }

//     const response = await fetch(crunchbaseBaseUrl, {
//         method: "POST",
//         body: JSON.stringify(requestBody),
//         headers: {
//             "X-cb-user-key": `${process.env.CRUNCHBASE_API_KEY}`
//         }
//     })
//     const data = await response.json()
//     console.log(JSON.stringify(data))

//     return Response.json({ message: "Successful" })
// }