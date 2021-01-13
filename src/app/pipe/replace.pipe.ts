import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToPlace: string) {
        return value.replace(char, valueToPlace);
    }
}