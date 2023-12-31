import BasicInformation from "./pages/createmadrasaprofile/basicInformation/BasicInformation";
import ContactInformation from "./pages/createmadrasaprofile/contactInformation/page";
import LegalAndAdministrativeInformation from "./pages/createmadrasaprofile/egalAndAdministrativeInformation/page";
import FacilitiesAndServices from "./pages/createmadrasaprofile/facilitiesAndServices/page";
import MedicalStaffInformation from "./pages/createmadrasaprofile/staffInformation/page";

export default function Home() {
  return (
    <div>
      <BasicInformation />
      <ContactInformation />
      <LegalAndAdministrativeInformation />
      <FacilitiesAndServices />
      <MedicalStaffInformation />
    </div>
  );
}
