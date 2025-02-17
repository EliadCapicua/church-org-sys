import "reflect-metadata";
import { Container } from "inversify";

export const container = new Container({ autoBindInjectable: true });

export const TYPES = {
	OrgService: Symbol.for("OrgService"),
};
