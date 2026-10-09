import { CardType, isCardType } from "./CardType";
import type { CardContent, CardContentData } from "./content/CardContent";
import { CardContentFactory } from "./content/CardContentFactory";
import { newId, type UUID } from "./types";

export interface ICard {
  id: UUID;
  question: CardContent;
  answer: CardContent;
  type: CardType;
}

/** Serialized form of a {@link Card}. */
export interface CardData {
  id: UUID;
  question: CardContentData;
  answer: CardContentData;
  type: CardType;
}

export class Card implements ICard {
  readonly id: UUID;
  readonly question: CardContent;
  readonly answer: CardContent;
  readonly type: CardType;

  constructor({ id, question, answer, type }: ICard) {
    this.id = id;
    this.question = question;
    this.answer = answer;
    this.type = type;
  }

  static create(
    question: CardContent,
    answer: CardContent,
    type: CardType = CardType.Definition,
  ): Card {
    return new Card({ id: newId(), question, answer, type });
  }

  static fromJSON(data: CardData): Card {
    return new Card({
      id: data.id,
      question: CardContentFactory.fromJSON(data.question),
      answer: CardContentFactory.fromJSON(data.answer),
      type: isCardType(data.type) ? data.type : CardType.Definition,
    });
  }

  toJSON(): CardData {
    return {
      id: this.id,
      question: this.question.toJSON(),
      answer: this.answer.toJSON(),
      type: this.type,
    };
  }
}
