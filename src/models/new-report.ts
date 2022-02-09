import { ApiProperty } from "@nestjs/swagger";

export class NewReport {

    @ApiProperty({
        type: String
    })
    description: string;

    @ApiProperty({
        type: String
    })
    tags: string;

    @ApiProperty({
        type: String
    })
    note: string;

    @ApiProperty({
        type: String
    })
    rating: number;


}