import { InjectRepository } from "@nestjs/typeorm";
import { Attachment } from "src/entities/attachment";
import { CreateAttachmentDTO } from "src/models/request/create-attachment-dto";
import { Repository } from "typeorm";

export class AttachemnentService {
    
    constructor(@InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>) {}

    insertAttachment(attachment: CreateAttachmentDTO): void {
        this.attachmentRepository.insert(attachment);
    }
}