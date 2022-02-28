import { ApiProperty } from "@nestjs/swagger";

export class CreateUserProjectRoleDTO {

    @ApiProperty({
        type: Number
    })
    idUser: number;

    @ApiProperty({
        type: Number
    })
    idProject: number;

    @ApiProperty({
        type: Number
    })
    idProjectRole: number;

}