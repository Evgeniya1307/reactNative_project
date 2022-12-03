import { array, number, to,of } from "prop-types";

export default {
  name: "restaraunt",
  title: "Restaraunt",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaraunt name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaraunt",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaraunt",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaraunt",
    },
    {
      name: "adress",
      type: "string",
      title: "Restaraunt address",
      validation: (Rule) => Rule.required(),
    },
    {
        name:'rating',
        type:'number',
        title:'Enter a Rating from (1-5 Stars)',
        validation:(Rule)=>
        Rule.required()
        .min(1)
        .max(5)
        .error('Please enter a Value between 1 and 5'), 
    },
    {
        name:'type',
        title:'Category',
        validation: (Rule) => Rule.required(),
        type:'string',
        to:[{type:'category'}],
    },
    {
        name:'dishes',
        type:'array',
        title:'Dishes',
        of:[{type:'string', to:[{type:'dish'}]}],
    }
  ],
};
