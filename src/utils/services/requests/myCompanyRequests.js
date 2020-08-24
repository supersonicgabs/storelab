import { client } from "../axios";
import {_handleError} from '../../helpers'


const getCompanyReq = async (modalSettings) => {
    try {
        const { status, data } = await client.get(`/company`);
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

const updateCompanyReq = async ({
    inputFantasyName,
    inputCNPJ,
    inputCompanyType,
    inputCompanyName,
    inputSector,
    inputLogoUrl,
    inputTaxRegime,
    inputCscIdentifier,
    inputCscCode,
    inputMunicipalRegistry,
    inputStateRegistry,
    inputAccountingCpfCnpj,
    inputAccountEmail,
    inputAccountPhone,
    inputEmail,
    inputCelPhone,
    inputPhone,
    inputCEP,
    inputCity,
    inputState,
    inputNeighborhood,
    inputStreet,
    inputNr,
    inputCj,
    inputShareCapital,
    inputCnpjCard,
    inputProofOfAddress,
    inputBank,
    inputAgency,
    inputAccount,
}, modalSettings) => {
  const dataBanks = () => inputBank ? 
    [
      {
        _id: inputBank,
        agency: inputAgency,
        account: inputAccount
      }
    ]
    :
    ""

    try {
        const { status, data } = await client.put("/company", {
            fantasyName: inputFantasyName,
            cnpj: inputCNPJ,
            companyType: inputCompanyType,
            companyName: inputCompanyName,
            sector: inputSector,
            logoUrl: inputLogoUrl,
            celPhone: inputCelPhone?.split(' ').join(''),
            phone: inputPhone?.split(' ').join(''),
            // email: inputEmail,
            accounting: {
              taxRegime: inputTaxRegime,
              cscIdentifier: inputCscIdentifier,
              cscCode: inputCscCode,
              municipalRegistry: inputMunicipalRegistry,
              stateRegistry: inputStateRegistry,
              accountingContact: {
                cpfCnpj: inputAccountingCpfCnpj,
                email: inputAccountEmail,
                phone: inputAccountPhone?.split(' ').join('')
              }
            },
            address: {
              cep: inputCEP,
              city: inputCity,
              state: inputState,
              neighborhood: inputNeighborhood,
              street: inputStreet,
              num: inputNr,
              cj: inputCj
            },
            docsImgs: {
              shareCapital: inputShareCapital,
              cnpjCard: inputCnpjCard,
              proofOfAddress: inputProofOfAddress
            },
            bankData: dataBanks()
            // bankData: [
            //   {
            //     _id: inputBank,
            //     agency: inputAgency,
            //     account: inputAccount
            //   }
            // ]
        });
        if (!status) throw new Error();
        return { status, data };
    } catch (error) {
        _handleError(error, modalSettings);
    }
};

export {
    getCompanyReq,
    updateCompanyReq
}