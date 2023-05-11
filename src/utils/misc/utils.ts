export function parseMediaToObjectArray(media: any) {
  /**TODO:
   * Add logic that will return a single string array for media that only has
   * one image from the server (i.e. Contentful)
   */
  if (Array.isArray(media)) {
    return media.map((imageLink) => ({ src: imageLink.fields.file.url, link: imageLink.fields.file.url }));
  } else return [];
}

const reportError = ({message}: {message: string}) => {
  // send the error to our logging service...
}

export function debugMsg(msg: string) {
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'){
    console.log(msg);
  }
}


// Refreshes the feed by fetching content from the recommendation service.
// Refreshes are triggered when the user has scrolled to a point where the
// next set of content is needed. (70%?)


export async function loader(startIndex: number, stopIndex: number, currentItems: {}[]) {
  const skip = startIndex;
  const limit = stopIndex - startIndex + 1;

  try {
   
  } catch (error) {
    console.log("Error from spread attempt:  ", error);
  }
}

