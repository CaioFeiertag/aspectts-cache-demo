import AspectTS from "@caiofeiertag/aspectts";

const carBrands = [
	"volkswagen",
	"chevrolet",
	"hyundai",
	"toyota",
	"jeep",
	"honda",
	"fiat",
];
export class CarModelApi {
	async getModels(): Promise<Record<string, string[]>> {
		const models: Record<string, string[]> = {};
		for (const brand of carBrands) {
			const response = await fetch(
				`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${brand}?format=json`
			);
			const json = await response.json();
			models[brand] = json.Results.map(
				(result: { Model_Name: string; url: string }) =>
					result.Model_Name
			);
		}
		return models;
	}
}
AspectTS.registerTargets([CarModelApi]);
