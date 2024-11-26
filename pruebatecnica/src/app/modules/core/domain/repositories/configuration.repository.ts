import { Configuration } from "../models/configuration";

export abstract class ConfigurationRepository{
    abstract getConfigurationByPK(idConfiguration: number): Promise<Configuration>;

}