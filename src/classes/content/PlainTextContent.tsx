import { CardContent } from "./CardContent";
import { ContentFormat } from "@/classes";

export class PlainTextContent extends CardContent {
  readonly format = ContentFormat.Plain;

  render() {
    return <p className="whitespace-pre-wrap">{this.source}</p>;
  }
}
