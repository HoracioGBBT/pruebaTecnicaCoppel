import { Menu } from "../models/menu";

export abstract class MenuRepository {
    abstract getMenus(params: any): Promise<any>;
    abstract createMenu(menu: Menu): Promise<Menu>;
    abstract getMenuByPK(idMenu: number): Promise<Menu>;
    abstract getByIdParent(idParent: number ): Promise<any>;
    abstract disableMenu(idMenu: number): Promise<Menu>;
    abstract enableMenu(idMenu: number): Promise<Menu>;
    abstract deleteMenu(idMenu: number): Promise<Menu>;
    abstract updateMenu(idMenu: number, menu: Menu): Promise<Menu>;

}