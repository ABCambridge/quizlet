import { CardContent } from "@/classes/content/CardContent";
import { ContentFormat } from "@/classes/content/ContentFormat";

export class MarkdownContent extends CardContent {
  readonly format = ContentFormat.Markdown;

  render() {
    // TODO: parse markdown. Renders the raw source until then.
    return <pre className="whitespace-pre-wrap font-mono">{this.source}</pre>;
  }
}
