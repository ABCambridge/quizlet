// Public API of the domain model. CardContent subclasses and their factory are
// internal: consumers work with Card and the serializable *Data shapes.
export { Card, type CardData } from "./Card";
export {
  CARD_TYPE_INFO,
  CARD_TYPES,
  CardType,
  type CardTypeInfo,
} from "./CardType";
export type { CardContentData } from "./content/CardContent";
export {
  CONTENT_FORMAT_INFO,
  CONTENT_FORMATS,
  ContentFormat,
  type ContentFormatInfo,
} from "./content/ContentFormat";
export { Deck, type DeckData } from "./Deck";
export { QuizSession } from "./QuizSession";
export { newId, type UUID } from "./types";
