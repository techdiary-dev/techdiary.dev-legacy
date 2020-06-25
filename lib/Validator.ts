import {
  IsNotEmpty,
  MinLength,
  IsBoolean,
  IsOptional,
  IsUrl,
  IsString,
  validate,
  IsDefined,
} from "class-validator";

export class CreateArticlePayload {
  constructor(
    title: string,
    tags: string,
    body: string,
    isPublished?: boolean,
    thumbnail?: string,
    seriesName?: string
  ) {
    this.title = title;
    this.tags = tags;
    this.body = body;
    this.isPublished = isPublished;
    this.thumbnail = thumbnail;
    this.seriesName = seriesName;
  }
  @MinLength(10, { message: "title: টাইটেল এ কমপক্ষে ১০ টি অক্ষর থাকতে হবে" })
  @IsNotEmpty({ message: "title: টাইটেল দিতেই হবে" })
  public title?: string;

  @IsNotEmpty({ message: "tags: কমপক্ষে একটি ট্যাগ দিতেই হবে" })
  public tags?: string;

  @MinLength(100, {
    message: "body: ডায়েরিতে কমপক্ষে ১০০ টি অক্ষর থাকতে হবে",
  })
  public body?: string;

  @IsNotEmpty({ message: "isPublished: প্রোপার্টি ভেল্যু দেননি" })
  @IsBoolean({ message: "isPublished: এর ভেল্যু বুলিয়ান হতে হবে" })
  public isPublished?: boolean;

  @IsOptional()
  @IsUrl({}, { message: "thumbnail: থাম্বনিল এ ভুল লিঙ্ক দিয়েছেন" })
  public thumbnail?: string;

  @IsOptional()
  @IsString({ message: "seriesName: এর ভেল্যু স্ট্রিং হতে হবে" })
  public seriesName?: string;
}

export async function validateCreateArticleInput({
  title,
  tags,
  body,
  isPublished,
  thumbnail,
  seriesName,
}: CreateArticlePayload) {
  let errorsArry: string[] = [];

  return new Promise((resolve, reject) => {
    validate(
      new CreateArticlePayload(
        title,
        tags,
        body,
        isPublished,
        thumbnail,
        seriesName
      )
    ).then((errors) => {
      errorsArry = errors.map((errObj: any) => {
        return Object.keys(errObj["constraints"]).map(
          (constrains) => `${errObj["constraints"][constrains]}`
        )[0];
      });
      resolve(errorsArry);
    });
  });
}
