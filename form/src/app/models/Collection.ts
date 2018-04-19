export class User{
    name: string;
    friends: Friends[]
    
}
export class Friends{
    firstName: string = '';
    lastName: string = ''; 
    narrative: string = '';
    hobies: Hobies[]

}
export class Hobies{
    name: string = '';
    narrative: string = '';
}
export const COLLECTION: User[] = [{
    "name": "kolya",
    "friends": [
        {
            "firstName": "John",
            "lastName": "Smith",
            "narrative": "This is content1 for textarea",
            "hobies": [
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                },
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                },
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                },
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                },
            ]
        },
        {
            "firstName": "John",
            "lastName": "Smith",
            "narrative": "This is content1 for textarea",
            "hobies": [
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                }
            ]
        },
        {
            "firstName": "John",
            "lastName": "Smith",
            "narrative": "This is content1 for textarea",
            "hobies": [
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                }
            ]
        },
        {
            "firstName": "John",
            "lastName": "Smith",
            "narrative": "This is content1 for textarea",
            "hobies": [
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                }
            ]
        },
      
    ]
},
{
    "name": "Adam",
    "friends": [
        {
            "firstName": "John",
            "lastName": "Smith",
            "narrative": "This is content1 for textarea",
            "hobies": [
                {
                    "name": "Football",
                    "narrative": "This is content2 for textarea"
                }
            ]
        },
       
    ]
}
]