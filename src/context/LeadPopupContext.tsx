"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type LeadPopupContextType = {
  isOpen: boolean;
  inquiryType: string;
  source: string;
  openPopup: (inquiryType: string, source: string) => void;
  closePopup: () => void;
};

const LeadPopupContext = createContext<LeadPopupContextType | undefined>(
  undefined
);

export function LeadPopupProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState("");
  const [source, setSource] = useState("");

  const openPopup = (
    inquiry: string,
    popupSource: string
  ) => {
    setInquiryType(inquiry);
    setSource(popupSource);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <LeadPopupContext.Provider
      value={{
        isOpen,
        inquiryType,
        source,
        openPopup,
        closePopup,
      }}
    >
      {children}
    </LeadPopupContext.Provider>
  );
}

export function useLeadPopup() {
  const context = useContext(LeadPopupContext);

  if (!context) {
    throw new Error(
      "useLeadPopup must be used inside LeadPopupProvider"
    );
  }

  return context;
}