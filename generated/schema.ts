// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CreateName extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CreateName entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CreateName entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CreateName", id.toString(), this);
  }

  static load(id: string): CreateName | null {
    return store.get("CreateName", id) as CreateName | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ethAddress(): Bytes {
    let value = this.get("ethAddress");
    return value.toBytes();
  }

  set ethAddress(value: Bytes) {
    this.set("ethAddress", Value.fromBytes(value));
  }

  get nameId(): Bytes {
    let value = this.get("nameId");
    return value.toBytes();
  }

  set nameId(value: Bytes) {
    this.set("nameId", Value.fromBytes(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }
}

export class RewardContributor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RewardContributor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RewardContributor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RewardContributor", id.toString(), this);
  }

  static load(id: string): RewardContributor | null {
    return store.get("RewardContributor", id) as RewardContributor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get nameId(): Bytes {
    let value = this.get("nameId");
    return value.toBytes();
  }

  set nameId(value: Bytes) {
    this.set("nameId", Value.fromBytes(value));
  }

  get pathosAmount(): BigInt {
    let value = this.get("pathosAmount");
    return value.toBigInt();
  }

  set pathosAmount(value: BigInt) {
    this.set("pathosAmount", Value.fromBigInt(value));
  }

  get ethosAmount(): BigInt {
    let value = this.get("ethosAmount");
    return value.toBigInt();
  }

  set ethosAmount(value: BigInt) {
    this.set("ethosAmount", Value.fromBigInt(value));
  }
}
