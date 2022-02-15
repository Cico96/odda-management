import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateAttachmentDTO } from "src/models/request/create-attachment-dto";
import { AttachemnentService } from "src/services/attachment-service";

@Controller('attachement')
@ApiTags('attachment')
export class AttachmentController {

    constructor(private attachmentService: AttachemnentService) {}

    @Post('/attachment')
    @ApiBody({
        type: CreateAttachmentDTO,
        required: true,
        description: 'Insert attachment'
    })
    insertAttachment(@Body() attachement: CreateAttachmentDTO): void {
        this.attachmentService.insertAttachment(attachement);
    }
}