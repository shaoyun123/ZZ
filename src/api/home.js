import request from '@/utils/request'

export function console() {
	return request({
		url: '/Home/Console?id=00422',
		method: 'get'
		// params: { data }
	})
}
