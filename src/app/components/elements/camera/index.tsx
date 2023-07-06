import { FC } from "react";

interface Props {
  string: string;
}
const Camera: FC<Props> = ({ string }) => {
  // const [source, setSource] = useState("");

  return (
    <div>
      <div>Camera</div>
      <input
        accept="image/*"
        className="bg-red-500 p-4"
        id="icon-button-file"
        type="file"
        capture="environment"
        // onChange={(e) => handleCapture(e.target)}
      />
      ;
    </div>
  );

  // function handleCapture(target: any) {
  //   if (target.files) {
  //     if (target.files.length !== 0) {
  //       const file = target.files[0];
  //       const newUrl = URL.createObjectURL(file);
  //       console.log("new url", newUrl.length);
  //       setSource(newUrl);
  //     }
  //   }
  // }
};

export default Camera;

/*** Notes ***
 * Notes go here.
 */
