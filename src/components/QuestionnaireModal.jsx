import React, { useEffect, useMemo, useRef, useState } from "react";

import { ReactComponent as CloseIcon } from "../assets/CloseIcon.svg";
import { ReactComponent as ChevronDown } from "../assets/ChevronDownLightGray.svg";
import { ReactComponent as OtherIcon } from "../assets/questionnaire/other.svg";
import { ReactComponent as CheckmarkIcon } from "../assets/CheckmarkIconGray.svg";

import { Dialog, Transition } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";

import { useDispatch, useSelector } from "react-redux";

import { questionnairePages } from "./questionnaire"; // Question Data
import { handleModal, submitAnswers, getAnswers } from "../lib/userSlice";
import { useEffectOnce } from "../lib/useEffectOnce";

const QuestionnaireModal = (props) => {
  const { isModalOpen } = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const modalHandler = (event) => {
    dispatch(handleModal(!isModalOpen));
  };

  const nextQuestion = () => {
    const key = questionnairePages[currentQuestion]?.key;
    console.log('key => ', key);
    if (answers[key]?.key?.includes("other") && !answers[key].value) {
      console.log(' => ', answers[key]);
      setErrorMessage("Please enter your option in other.")
      setHasError(true);
      return;
    } else if (!answers[key]) {
      setErrorMessage("Please choose at least one option.")
      setHasError(true);
      return;
    } else {
      setErrorMessage("")
      setHasError(false);
    }
    if (currentQuestion === questionnairePages.length - 1) {
      let data = {};
      Object.keys(answers).forEach((key) => {
        data[key] = answers[key].value;
      });
      dispatch(submitAnswers({ ...data, user: "mkt@narola.email" }));
      return;
    }

    setCurrentPage((prevValue) => {
      setCurrentQuestion(prevValue);
      return prevValue + 1;
    });
  };

  const prevQuestion = () => {
    setCurrentPage((prevValue) => {
      setCurrentQuestion(prevValue - 2);
      return prevValue - 1;
    });
  };

  const handleOptionChange = (key, value, info = " ") => {
    setAnswers((prevValue) => ({
      ...prevValue,
      [key]: {
        key: value,
        value: info.includes("other") ? "" : info,
      },
    }));
  };

  useEffectOnce(() => {
    const noShow = localStorage.getItem("noShow");
    if (noShow !== "noshow") {
      dispatch(handleModal(true));
    }
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      dispatch(getAnswers(+id));
    }
  }, []);

  return (
    <Transition appear show={isModalOpen} as={React.Fragment}>
      <Dialog open={isModalOpen} onClose={modalHandler} className="relative z-50">
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
              <div>
                <Dialog.Panel
                  className="w-[700px] max-w-11/12 pt-8 flex flex-col gap-6 justify-around items-center overflow-hidden relative bg-app-black rounded-md"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="w-8 aspect-square rounded-full absolute top-2 right-3 bg-black bg-opacity-60 hover:bg-opacity-90 transition-all duration-200 flex items-center justify-center"
                    onClick={modalHandler}
                  >
                    <CloseIcon className="w-6 h-6" />
                  </button>
                  {questionnairePages.map((question, i) => {
                    return (
                      currentQuestion === i && (
                        <React.Fragment key={question.key}>
                          <div className="flex flex-col items-center gap-1">
                            <h1 className="text-white text-2xl font-bold text-center">{question?.title}</h1>

                            <p className="text-modal-description text-sm text-center w-9/12 ">
                              Your feedback will help us in developing new features and improving logo diffusion
                            </p>
                          </div>
                          <RadioGroup
                            className="w-[70%] grid grid-cols-2 grid-rows-2 gap-4 [&>div]:aspect-square"
                            onChange={(value) => handleOptionChange(question.key, value, value)}
                            defaultValue={answers[question.key]?.key}
                          >
                            {question?.options?.map((option) => {
                              return (
                                <RadioGroup.Option
                                  key={option.title}
                                  className={`p-4 flex flex-col items-center justify-center gap-4 rounded-md bg-app-bg-gray ui-checked:outline-[2px] ui-checked:[outline-style:solid] ui-checked:outline-app-green transition-all duration-300`}
                                  value={option.title}
                                >
                                  <option.icon />
                                  <span className="text-white text-base">{option.title}</span>
                                  <span className="w-11/12 text-sm text-modal-description">{option.subtitle}</span>
                                </RadioGroup.Option>
                              );
                            })}
                            <RadioGroup.Option
                              className={`p-4 flex flex-col items-center justify-center gap-4 rounded-md bg-app-bg-gray ui-checked:outline-[2px] ui-checked:[outline-style:solid] ui-checked:outline-app-green transition-all duration-300`}
                              value={`${question?.key}other`}
                              key="-1"
                            >
                              <OtherIcon className="" />
                              <span className="text-white text-base">Other</span>
                              <textarea
                                rows={3}
                                className="w-11/12 text-sm text-modal-description p-2 rounded-lg !outline-none bg-app-bg-gray placeholder:text-modal-description border-solid border border-text-field-border "
                                placeholder="Please specify."
                                defaultValue={
                                  answers[question.key]?.key === `${question?.key}other`
                                    ? answers[question.key]?.value
                                    : ""
                                }
                                onChange={(e) =>
                                  handleOptionChange(question?.key, `${question?.key}other`, e.target.value)
                                }
                              />
                            </RadioGroup.Option>
                          </RadioGroup>
                        </React.Fragment>
                      )
                    );
                  })}

                  {hasError && <span className="text-red-600">{errorMessage}</span>}
                  <div className="flex flex-row gap-2">
                    <button
                      className={`h-12 py-4 pl-3 pr-1 rounded-md group flex gap-1 items-center justify-center transition-all duration-300 [&_path]:transition-all [&_path]:duration-300 group disabled:cursor-not-allowed`}
                      disabled={currentPage <= 1}
                      onClick={prevQuestion}
                    >
                      <ChevronDown
                        className={`rotate-90 [&>path]:stroke-white w-6 h-6 group-hover:[&>path]:stroke-app-green relative ml-0 mr-1 group-hover:ml-1 group-hover:mr-0 transition-all duration-300  ${currentPage <= 1 ? '[&>path]:stroke-back-btn' : '[&>path]:stroke-white'} `}
                      />
                    </button>
                    <button
                      className="h-12 py-4 pl-3 pr-1 border border-solid border-carousel-button-border bg-app-bg-gray rounded-md group flex gap-1 items-center justify-center transition-all duration-300 [&_path]:transition-all [&_path]:duration-300 group disabled:cursor-not-allowed"
                      onClick={nextQuestion}
                      disabled={currentPage > questionnairePages.length}
                    >
                      <span className="text-carousel-next-count mr-1">
                        {currentPage} / {questionnairePages.length}
                      </span>

                      <span className={`text-white group-disabled:text-carousel-next-count`}>Next</span>

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
                        onChange={(e) => {
                          localStorage.setItem("noShow", e.target.checked ? "noshow" : "");
                        }}
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
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuestionnaireModal;
