import path from 'path';
// import { promises as fs } from 'fs';
import { Persona, Curation } from '../../../../components/entities';


// export async function getCurations(ctx: Persona) : Promise<getCurationsResponse>{
export async function GetCuration(ctx: Persona) {
    console.log(ctx.limit)
    //Find the absolute path of the json directory
    //Read the json data file data.json
    try {
        // const jsonDirectory = path.join(process.cwd(), 'json');
        // const fileContents = await fs.readFile(jsonDirectory + '/mock_curations.json', 'utf8');
        //Return the content of the data file in json format
        // const nextItems = await getContent({ skip, limit, type: "story" });
        // if (nextItems.length > 0) setLocalStories((current) => [...current, ...nextItems]);
        /** TODO: Maybe add some logic that will make sure that the client has not accumulated too much content.
         * Essentially trim the localStories array if needed.
         * Keep in mind the the array should be looked at in three parts: initial load (middle but initially on top; index 0 - n),
         * scroll load (@ bottom of screen but top of array; index n+1 - n+1+skip), and the newpush (content pushed from the server:
         * spliced in @ index 0. )
         *
         * More than likely the Mosaic component will need to be completely rerendered so that the new array elements pushed from the
         * can be accounted for appropriately.
         */
        let params = {
          limit: ctx.limit,
          type: "story",
          from: "useEffect",
        };
        console.log("params: to refresh context.  ", params);
        // let curations = JSON.parse(fileContents);
        let curation: Curation = JSON.parse('{}');
        return curation; 

        // return fileContents; 

    // setLocalStories(await getContent(params));
  } catch (error) {
    console.log(error);
  }
}