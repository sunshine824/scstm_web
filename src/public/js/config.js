export const serveUrl = 'http://10.0.1.86:8080'

export function getAjax(url, params, resolveBack, rejectErr, _this) {
  //_this.$http.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  _this.$http({
    method: 'post',
    url: url,
    data: params
  })
    .then((res) => {
      if (res.status === 200) {
        resolveBack(res.data)
      }
    })
    .catch((err) => {
      rejectErr(err.response)
    })
}
