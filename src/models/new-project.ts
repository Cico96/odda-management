import { ApiProperty } from "@nestjs/swagger";

export class NewProject {

    @ApiProperty({
        type: String
    })
    name: string;

    @ApiProperty({
        type: String
    })
    description: string;

    @ApiProperty({
        type: Date
    })
    startDate: Date;

    @ApiProperty({
        type: Date
    })
    endDate: Date;

    @ApiProperty({
        type: Number
    })
    estimatedHours: number;

    @ApiProperty({
        type: Number
    })
    estimatedBudget: number;
}