const Swal = require('sweetalert2')

const operationSuccess = () => {
    Swal.fire(
        '¡Excelente!',
        '¡Se ha realizado la operación con éxito!',
        'success'
    )
}

const operationFail = () => {
    Swal.fire(
       {icon: 'error',
       title: 'Oops...',
       text: 'Algo Salio mal.!',
       footer: '<a href>Por que el error?, preguntele a otra gente X(</a>'}
    )
}

export {operationSuccess, operationFail}