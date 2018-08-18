import {serialize, } from "./serializer";
import {deserialize, } from "./deserializer";
import {buildUrl, buildRequest, } from "./adapter";

class Model {
	constructor(modelName, item) {
		this.serialize = serialize;
		this.deserialize = deserialize;
		this.buildUrl = buildUrl;
		this.buildRequest = buildRequest;
		this.modelName = modelName;
		this.properties = this.normalize(item);
		this.id = this.properties.id;
	}
	normalize(unNormalizedData) {
		return this.deserialize(unNormalizedData);
	}
	static async fetchAll(modelName) {
		const url = buildUrl(modelName);
		return await fetch(url)
			.then(response => response.json())
			.then(({data, }) => data.map(deserialize))
			.catch(error => console.error(error.message));
	}
	async fetch() {
		const url = this.buildUrl(this.modelName, this.id);
		const newData = await fetch(url)
			.then(response => response.json())
			.then(response => response.data)
			.catch(error => console.error(error.message));
		this.properties = this.normalize(newData);
		return true;
	}
	async create() {
		const url = this.buildUrl(this.modelName, this.id);
		const { data, jwt, } = await fetch(url, {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: this.serialize(this.properties),
		}).then(response => response.json())
			.catch(error => console.error(error.message));
		console.log(data, jwt);
		this.properties = this.normalize(data);
		return jwt;
	}
	async update() {
		const url = this.buildUrl(this.modelName, this.id);
		const newData = await fetch(url, {
			method: "PUT",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: this.serialize(this.properties),
		}).then(response => response.json())
			.then(response => response.data)
			.catch(error => console.error(error.message));
		this.properties = this.normalize(newData);
		return true;
	}
	async destroy() {
		await fetch(this.buildUrl(this.modelName, this.id), {
			method: "DELETE",
		}).then(response => response.json())
			.then(response => response.data)
			.catch(error => console.error(error.message));
		this.properties = null;
		return true;
	}
}

export default Model;