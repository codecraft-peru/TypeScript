declare var names: String[];
interface Monument {
    name: string;
    heightInMeters: number;
}
declare var monuments: Monument[];
declare function compareMonumentHeights(a: Monument, b: Monument): number;
declare var monumentsOrderByHeight: Monument[];
declare var tallestMonument: Monument;
