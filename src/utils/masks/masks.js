const name = (campo) => {
    if (/^[^a-zA-Z]+/.test(campo)) campo = '';
    const regra = /[-'a-zA-ZÀ-ÖØ-öø-ſ ]+/gi;
    const valores = campo.match(regra);
    if (valores) campo = valores.join('').replace(/ +/gi, ' ');
    return campo;
};

const number = (campo) => {
    if (!/^[^a-zA-Z]+/.test(campo)) campo = '';
    const regra = !/[-'a-zA-ZÀ-ÖØ-öø-ſ ]+/gi;
    const valores = campo.match(regra);
    if (valores) campo = valores.join('').replace(/ +/gi, ' ');
    return campo;
};

const cep = (campo) => {
    const regras = [/\d+/gi, /^(\d{5})-?(\d{1,3})/];
    const valores = campo.match(regras[0]);
    if (!valores) return campo = '';
    campo = valores.join('');
    if (regras[1].test(campo)) campo = campo.replace(regras[1], '$1-$2');
    if (campo.length > 9) campo = campo.substr(0, 9);
    return campo;
};

const phone = (campo, inputElement) => {
    const regras = [/\d+/gi, /^(\d\d?)/, /^(\d\d)(\d{4})-?(\d{1,4})/, /^(\d\d)(\d{5})-?(\d{1,4})/];
    const valores = campo.match(regras[0]);
    if (!valores) return campo = '';
    const valor = campo = valores.join('');
    if (valor.length > 0) campo = valor.replace(regras[1], '($1');
    if (valor.length > 2) campo = valor.replace(regras[1], '($1) ');
    if (valor.length > 6) campo = valor.replace(regras[2], '($1) $2-$3');
    if (valor.length > 10) campo = valor.replace(regras[3], '($1) $2-$3');
    if (valor.length > 11) campo = campo.substr(0, 15);
    return campo;
};

const rg = (campo, inputElement) => {
    const regras = [/\d+/gi, /^(\d{1,2})/, /^(\d{1,2})\.?(\d{3})/, /^(\d{1,2})\.?(\d{3})\.?(\d{3})/, /^(\d{1,2})\.?(\d{3})\.?(\d{3})-?(\d)?/];
    const valores = campo.match(regras[0]);
    const letras = campo.match(/[a-zA-Z]+$/gi);
    const digito = letras ? letras[0][0] : '';
    if (!valores) return campo = '';
    const valor = campo = valores.join('');
    if (valor.length > 2) campo = valor.replace(regras[1], '$1.');
    if (valor.length > 5) campo = valor.replace(regras[2], '$1.$2.');
    if (valor.length > 7) campo = valor.replace(regras[3], '$1.$2.$3');
    if (valor.length === 8 && digito) campo += '-' + digito.toUpperCase();
    if (valor.length > 8) campo = valor.replace(regras[4], '$1.$2.$3-$4');
    if (valor.length > 9) campo = campo.substr(0, 12);

    if (valor.length < 9) inputElement.style.border = "1px solid red";
    else inputElement.style.border = null;
    return campo
};

const cnpj = (campo, inputElement) => {
    const numeros = /\d+/gi;
    const valores = campo.match(numeros);
    if (!valores) return campo = '';
    const valor = valores.join('');
    const cnpj = /^([0-9]{1,2})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?\/?([0-9]{1,4})?-?([0-9]{1,2})?$/;
    campo = campo.replace(/[^\d./-]/gi, '');
    if (cnpj.test(valor)) campo = valor.replace(cnpj, (all, a, b, c, d, e) => {
        return (a || '') + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '/' + d : '') + (e ? '-' + e : '');
    });
    if (campo.length < 18) inputElement.style.border = "1px solid red"
    if (campo.length >= 18) {
        inputElement.style.border = null;
        campo = campo.substr(0, 18);
    };
    return campo;
};

const cpf = (campo, inputElement) => {
    const numeros = /\d+/gi;
    const valores = campo.match(numeros);
    if (!valores) return campo = '';
    const valor = valores.join('');
    const cpf = /^([0-9]{1,3})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?-?([0-9]{1,2})?$/;
    campo = campo.replace(/[^\d./-]/gi, '');
    if (cpf.test(valor)) campo = valor.replace(cpf, (all, a, b, c, d) => {
        return (a || '') + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '-' + d : '');
    });
    if (campo.length < 14) inputElement.style.border = "1px solid red";
    if (campo.length >= 14) {
        inputElement.style.border = null
        campo = campo.substr(0, 14);
    }
    return campo;
};

const stateRegistry = (campo, inputElement) => {
    const numeros = /\d+/gi;
    const valores = campo.match(numeros);
    if (!valores) return campo = '';
    const valor = valores.join('');
    const stateRegistry = /^([0-9]{1,3})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?-?([0-9]{1,3})?$/;
    campo = campo.replace(/[^\d./-]/gi, '');
    if (stateRegistry.test(valor)) campo = valor.replace(stateRegistry, (all, a, b, c, d) => {
        return (a || '') + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '.' + d : '');
    });
    if (campo.length < 15) inputElement.style.border = "1px solid red";
    if (campo.length >= 15) {
        inputElement.style.border = null
        campo = campo.substr(0, 15);
    }
    return campo;
};

const cpfcnpj = (campo, inputElement) => {
    const numeros = /\d+/gi;
    const valores = campo.match(numeros);
    if (!valores) return campo = '';
    const valor = valores.join('');
    const cpf = /^([0-9]{1,3})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?-?([0-9]{1,2})?$/;
    const cnpj = /^([0-9]{1,2})?\.?([0-9]{1,3})?\.?([0-9]{1,3})?\/?([0-9]{1,4})?-?([0-9]{1,2})?$/;
    campo = campo.replace(/[^\d./-]/gi, '');
    if (cpf.test(valor)) campo = valor.replace(cpf, (all, a, b, c, d) => {
        return (a || '') + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '-' + d : '');
    });
    else if (cnpj.test(valor)) campo = valor.replace(cnpj, (all, a, b, c, d, e) => {
        return (a || '') + (b ? '.' + b : '') + (c ? '.' + c : '') + (d ? '/' + d : '') + (e ? '-' + e : '');
    });
    if (campo.length > 18) campo = campo.substr(0, 18);
    // if (campo.length < 14) inputElement.style.border = "1px solid red";
    // if (campo.length >= 15 && campo.length < 18) inputElement.style.border = "1px solid red";
    // if (campo.length === 18) {
    //     inputElement.style.border = null
    //     campo = campo.substr(0, 14);
    // }
    return campo;    
}

const date = (campo, inputElement) => {
    if (campo.type === 'date') return;
    const numeros = campo.replace(/^0?\/|[^\d/]/gi, '');
    if (numeros === '') {
        campo = numeros;
        inputElement.style.border = "1px solid red";
        return '';
    };
    campo = numeros
        .replace(/(^|\/)00+\/?/g, '0')
        .replace(/(^|\/)([1-9]\/)/, '0$2')
        .replace(
            /(\d\d)(\/?)(\d{1,2})?(\/?)0*(\d{1,4})?.*/g,
            function (all, dd, s1, mm, s2, aaaa) {
                if (dd > 31 || mm > 12) inputElement.style.border = '1px solid red';
                else inputElement.style.borderColor = null;
                return dd + (mm ? '/' + mm : s1 || '') + (aaaa ? '/' + aaaa : s2 || '');
            }
        );
    return campo;
};

const email = (campo, inputElement) => {
    const inputName = inputElement.name;
    console.log(inputName)
    const inputLabel = window.document.querySelector(`[for='${inputName}']`);
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    campo = campo.toLowerCase();
    if (!emailRegex.test(String(campo).toLowerCase())) {
        inputElement.style.border = "1px solid red";
        !inputLabel || (inputLabel.style.color = "red");
    } else {
        !inputLabel || (inputLabel.style.color = null);
        inputElement.style.border = null;
    };
    return campo;
};

const password = (campo, inputElement) => {
    const inputName = inputElement.name;
    const inputLabel = window.document.querySelector(`[for='${inputName}']`);
    if (campo.length >= 0 && campo.length < 6) {
        inputElement.style.border = '1px solid red';
        !inputLabel || (inputLabel.style.color = "red");
    }
    else {
        inputElement.style.border = null;
        !inputLabel || (inputLabel.style.color = null);
    }
    return campo;
};

const money = (campo) => {
    var v = campo.replace(/\D/g, '');
    v = (v / 100).toFixed(2) + '';
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    campo = v;
    return campo;
};

export {
    name,
    cep,
    phone,
    rg,
    cnpj,
    date,
    email,
    password,
    money,
    cpf,
    stateRegistry,
    number,
    cpfcnpj
}