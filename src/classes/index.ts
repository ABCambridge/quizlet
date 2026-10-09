// Public API of the domain model. CardContent subclasses and their factory are
// internal: consumers work with Card and the serializable *Data shapes.
export { Card, type CardData } from "./Card/Card";
export {
  CARD_TYPE_INFO,
  CARD_TYPES,
  CardType,
  type CardTypeInfo,
} from "./Card/CardType";
export type { CardContentData } from "./content/CardContent";
export {
  CONTENT_FORMAT_INFO,
  CONTENT_FORMATS,
  ContentFormat,
  type ContentFormatInfo,
} from "./content/ContentFormat";
export { Deck, type DeckData } from "./Deck/Deck";
export { QuizSession } from "./Quiz/QuizSession";
export { newId, type UUID } from "./types";
