
import Vue from 'vue';
import axios from 'axios';

const VUEINS = new Vue();

axios.interceptors.request.use(
	function (config) {
		return config;
  	}, 
  	function (error) {
  		return Promise.reject(error);
  	}
);
axios.interceptors.response.use(
	function(response) {
		return response;
	},
	function(error) {
		if (error) {
			VUEINS.$Message.error("接口异常");
		}
	    return Promise.reject(error);
	}
);

const request = {
	base: (config) => {
		config.url = config.url;
		return axios.request(config)
	},
	get: (url, params) => {
		url = url;
		return axios.get(url, {params: params})
	},
	del: (url,params) => {
		url = url;
		return axios.delete(url, {params: params})
	},
	head: (url,params) => {
		url = url;
		return axios.head(url, {params: params})
	},
	post: (url,data,config) => {
		url = url;
		return axios.post(url, data || {}, config || {})
	},
	put: (url,data,config) => {
		url = url;
		return axios.put(url, data || {}, config || {})
	},
	patch: (url,data,config) => {
		url = url;
		return axios.patch(url, data || {}, config || {})
	}

}

export default request;

