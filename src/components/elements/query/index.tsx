import { FC, useState, useEffect } from "react";
import Button, { ButtonVariant } from "@/components/core/button";
import Modal from "@/components/groups/modal";

interface QueryComponentProps {}
const QueryComponent: FC<QueryComponentProps> = () => {
  const [isFilterModalActive, setIsFilterModalActive] =
    useState<boolean>(false);

  function toggleFilterModal() {
    setIsFilterModalActive(!isFilterModalActive);
  }

  useEffect(() => {}, []);
  return (
    <div className="fixed top-0 right-0 left-0 z-40 w-full h-24 max-w-xl m-auto">
      <div className="relative">
        <div className=" pt-4 px-6">
          <div className="flex rounded-full bg-white min-h-14 h-14 box-border shadow-lg border-gray-100">
            <div className="flex items-center min-w-24 w-full box-border">
              search
            </div>
            <div className="flex items-center h-full max-w-12">
              <Button
                variant={ButtonVariant.FILTER}
                onClick={toggleFilterModal}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal isActive={isFilterModalActive} toggleFn={toggleFilterModal}>
        <div className="h-full">hello this is a modal</div>
      </Modal>
    </div>
  );
};

export default QueryComponent;

function getQueryDataFromFilter() {}
