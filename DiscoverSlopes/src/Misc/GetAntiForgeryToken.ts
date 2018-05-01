import * as $ from 'jquery'

//export default function AddAntiForgeryToken(data) {
//    data.__RequestVerificationToken = $('#__AjaxAntiForgeryForm input[name=__RequestVerificationToken]').val();
//    return data;
//}
export default function GetAntiForgeryToken(data) {
    data.__RequestVerificationToken = $("[name='__RequestVerificationToken']").val();
    return data;
};

export function GetAntiForgeryTokenWithoutData() {
    return $("[name='__RequestVerificationToken']").val();
};
