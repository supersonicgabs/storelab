import cepPromise from "cep-promise";
import HttpStatus from 'http-status-codes';

const _handleCEP = async (cep, setInputCEP, setInputCity, setInputState, setInputNeighborhood, setInputStreet) => {
    setInputCEP(cep);
    if (cep.length === 9) {
        try {
            const { city, neighborhood, state, street } = await cepPromise(cep.replace("-", ""));
            setInputCity(city)
            setInputState(state)
            setInputNeighborhood(neighborhood)
            setInputStreet(street)
        } catch (error) {
            console.log(error)
        }
    }
}

const _redirect = (path) =>{
    document.location.href = path
}

const _formatStringData = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
}

const _handleInput = (e, method) => {
    let inputValue = e.target && e.target.value;
    inputValue && console.log(inputValue);
    
    method && method(inputValue);
}

const _setSlideModalTimer = (setModalMessage, message, setTypeModal, type, setModal, path) =>{
    setModal(true)
    setModalMessage(message)
    setTypeModal(type)
    setTimeout(()=>{
        setModal(false)
        path && _redirect(path)
    }, 3000)
}

const _setSlideModalVisible = (setModalMessage, message, setTypeModal, type, setModal) =>{
    setModal(true)
    setModalMessage(message)
    setTypeModal(type)
}

const _handleError = (error, modalSettings) => {
    const {setModalMessage, setTypeModal, setModal} = modalSettings
    if (error.response?.status) {
        switch (error.response.status) {
            case HttpStatus.UNPROCESSABLE_ENTITY:
                _setSlideModalTimer(setModalMessage, error.response.data.message, setTypeModal, 'danger', setModal)
                break;

            default:
                _setSlideModalTimer(setModalMessage, error.response.data.message || `Algo inesperado aconteceu no servidor, tente novamente em alguns instantes`, setTypeModal, 'danger', setModal)
                break;
        }
    } else {
        _setSlideModalTimer(setModalMessage, `Algo inesperado aconteceu no servidor, tente novamente em alguns instantes`, setTypeModal, 'danger', setModal)
    }
}

const _validationBtnColor = (conditions, getBtn) =>{
    if(conditions) getBtn.dataset.btn="success"
}

const _modalMessage = (dataUpdate, modalSettings, message, redirect) =>{
    const {setModalMessage, setTypeModal, setModal} = modalSettings
    if(dataUpdate){
        _setSlideModalTimer(setModalMessage, message, setTypeModal, 'success', setModal, redirect)
    }
    else{
        _setSlideModalTimer(setModalMessage, 'Houve um erro ao validar os campos', setTypeModal, 'danger', setModal)
    }    
}

const _sendData = (func, reqBody, modalSettings) => func(reqBody, modalSettings)

const _getUnique = (arr) => [...new Map(arr.map(item => [item._id, item])).values()];
// const _getUnique = (arr, id) => arr.length!==0 ? arr.filter(item=>item._id!==id) : arr

export{
    _handleCEP,
    _redirect,
    _formatStringData,
    _setSlideModalTimer,
    _setSlideModalVisible,
    _handleInput,
    _handleError,
    _validationBtnColor,
    _modalMessage,
    _sendData,
    _getUnique
}