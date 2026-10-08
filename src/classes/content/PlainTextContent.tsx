import { CardContent } from "@/classes/content/CardContent";
import { ContentFormat } from "@/classes/content/ContentFormat";

export class PlainTextContent extends CardContent {
  readonly format = ContentFormat.Plain;

  render() {
    return <p className="whitespace-pre-wrap">{this.source}</p>;
  }
}
