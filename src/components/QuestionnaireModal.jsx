import React, { useEffect, useMemo, useRef, useState } from "react";

import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";
import { ReactComponent as ChevronDown } from "../assets/ChevronDownLightGray.svg";
import { ReactComponent as OtherIcon } from "../assets/questionnaire/other.svg";
import { ReactComponent as CheckmarkIcon } from "../assets/CheckmarkIconGray.svg";

import { Dialog, Transition } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";

import { useDispatch, useSelector } from "react-redux";

import { QuestionnairePages } from "./questionnaire"; // Question Data

const QuestionnaireModal = (props) => {

  const [open, setOpen] = useState(true) // Change this to redux managed state

  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto custom-scroll">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className="w-[700px] max-w-11/12 pt-8 flex flex-col gap-6 justify-around items-center overflow-hidden relative bg-app-black rounded-md"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="w-8 aspect-square rounded-full absolute top-2 right-3 bg-black bg-opacity-60 hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center"
                  onClick={() => setOpen(false)}
                >
                  <CloseIcon className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center gap-1">
                  <h1 className="text-white text-2xl font-bold text-center">
                    Question?
                  </h1>

                  <p className="text-modal-description text-sm text-center w-9/12 ">
                    Your feedback will help us in developing new features and
                    improving logo diffusion
                  </p>
                </div>

                <RadioGroup
                  className="w-[70%] grid grid-cols-2 grid-rows-2 gap-4 [&>div]:aspect-square"
                >
                  <RadioGroup.Option
                    className={`p-4 flex flex-col items-center justify-center gap-4 rounded-md bg-app-bg-gray ui-checked:outline-[2px] ui-checked:[outline-style:solid] ui-checked:outline-app-green transition-all duration-300`}
                    value={"Sampel"}
                  >
                    <OtherIcon className="" />
                    <span className="text-white text-base">
                      Sample
                    </span>
                    <span className="w-11/12 text-sm text-modal-description">
                      sample
                    </span>
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    className={`p-4 flex flex-col items-center justify-center gap-4 rounded-md bg-app-bg-gray ui-checked:outline-[2px] ui-checked:[outline-style:solid] ui-checked:outline-app-green transition-all duration-300`}
                    value={"Sampel 1"}
                  >
                    <OtherIcon className="" />
                    <span className="text-white text-base">
                      Sample 1
                    </span>
                    <span className="w-11/12 text-sm text-modal-description">
                      sample
                    </span>
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    className={`p-4 flex flex-col items-center justify-center gap-4 rounded-md bg-app-bg-gray ui-checked:outline-[2px] ui-checked:[outline-style:solid] ui-checked:outline-app-green transition-all duration-300`}
                    value={"Sampel 2"}
                  >
                    <OtherIcon className="" />
                    <span className="text-white text-base">
                      Sample 2
                    </span>
                    <span className="w-11/12 text-sm text-modal-description">
                      sample
                    </span>
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    className={`p-4 flex flex-col items-center justify-center gap-4 rounded-md bg-app-bg-gray ui-checked:outline-[2px] ui-checked:[outline-style:solid] ui-checked:outline-app-green transition-all duration-300`}
                    value={"-1"}
                    key="-1"
                  >
                    <OtherIcon className="" />
                    <span className="text-white text-base">Other</span>
                    <textarea
                      rows={3}
                      className="w-11/12 text-sm text-modal-description p-2 rounded-lg !outline-none bg-app-bg-gray placeholder:text-modal-description border-solid border border-text-field-border "
                      placeholder="Please specify."
                    />
                  </RadioGroup.Option>
                </RadioGroup>

                <span className="text-red-600">Error</span>
                <div className="flex flex-row gap-2">
                  <button
                    className="h-12 py-4 pl-3 pr-1 rounded-md group flex gap-1 items-center justify-center transition-all duration-300 [&_path]:transition-all [&_path]:duration-300 group disabled:cursor-not-allowed"
                  >
                    <ChevronDown
                      className={`rotate-90 [&>path]:stroke-back-btn  w-6 h-6 group-hover:[&>path]:stroke-app-green relative ml-0 mr-1 group-hover:ml-1 group-hover:mr-0 transition-all duration-300`}
                    />
                  </button>
                  <button
                    className="h-12 py-4 pl-3 pr-1 border border-solid border-carousel-button-border bg-app-bg-gray rounded-md group flex gap-1 items-center justify-center transition-all duration-300 [&_path]:transition-all [&_path]:duration-300 group disabled:cursor-not-allowed"
                    // disabled={values[currentQuestion.key] === undefined}
                  >
                    <span className="text-carousel-next-count mr-1">
                      2 / 3
                    </span>

                    <span className="text-white group-disabled:text-carousel-next-count">
                      Next
                    </span>

                    <ChevronDown
                      className={`-rotate-90 [&>path]:stroke-white group-hover:[&>path]:stroke-app-green relative ml-0 mr-1 group-hover:ml-1 group-hover:mr-0 transition-all duration-300`}
                    />
                  </button>
                </div>

                <div className="bg-app-bg-gray w-full p-4 flex items-center justify-center ">
                  <div className="flex flex-row">
                    <input
                      type="checkbox"
                      id="dont-show"
                      className="appearance-none h-[17px] w-[17px]  rounded-[4px] border-[1.5px] border-solid border-checkmark-border transition-all duration-200 peer"
                    />
                    <CheckmarkIcon className="opacity-0 peer-checked:opacity-100 [&>path]:stroke-checkmark-check absolute rounded-full pointer-events-none my-1 mx-1 transition-all duration-200 w-[9px] h-[9px]" />
                    <label
                      htmlFor="dont-show"
                      className="flex flex-col justify-center px-2 select-none text-xs text-title-white"
                    >
                      Don't show this again
                    </label>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuestionnaireModal;
