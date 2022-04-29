/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateAccount: OnCreateAccountSubscription;
  onUpdateAccount: OnUpdateAccountSubscription;
  onDeleteAccount: OnDeleteAccountSubscription;
  onCreateTransaction: OnCreateTransactionSubscription;
  onUpdateTransaction: OnUpdateTransactionSubscription;
  onDeleteTransaction: OnDeleteTransactionSubscription;
};

export type CreateAccountInput = {
  id?: string | null;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
};

export type ModelAccountConditionInput = {
  fname?: ModelStringInput | null;
  sname?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  bname?: ModelStringInput | null;
  bcity?: ModelStringInput | null;
  and?: Array<ModelAccountConditionInput | null> | null;
  or?: Array<ModelAccountConditionInput | null> | null;
  not?: ModelAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Account = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: ModelTransactionConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection";
  items: Array<Transaction | null>;
  nextToken?: string | null;
};

export type Transaction = {
  __typename: "Transaction";
  id: string;
  account?: Account | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type UpdateAccountInput = {
  id: string;
  fname?: string | null;
  sname?: string | null;
  email?: string | null;
  phone?: string | null;
  bname?: string | null;
  bcity?: string | null;
};

export type DeleteAccountInput = {
  id: string;
};

export type CreateTransactionInput = {
  id?: string | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  accountTransactionsId?: string | null;
};

export type ModelTransactionConditionInput = {
  v1?: ModelFloatInput | null;
  v2?: ModelFloatInput | null;
  v3?: ModelFloatInput | null;
  v4?: ModelFloatInput | null;
  v5?: ModelFloatInput | null;
  v6?: ModelFloatInput | null;
  v7?: ModelFloatInput | null;
  v8?: ModelFloatInput | null;
  v9?: ModelFloatInput | null;
  v10?: ModelFloatInput | null;
  v11?: ModelFloatInput | null;
  v12?: ModelFloatInput | null;
  v13?: ModelFloatInput | null;
  v14?: ModelFloatInput | null;
  v15?: ModelFloatInput | null;
  v16?: ModelFloatInput | null;
  v17?: ModelFloatInput | null;
  v18?: ModelFloatInput | null;
  v19?: ModelFloatInput | null;
  v20?: ModelFloatInput | null;
  v21?: ModelFloatInput | null;
  v22?: ModelFloatInput | null;
  v23?: ModelFloatInput | null;
  v24?: ModelFloatInput | null;
  v25?: ModelFloatInput | null;
  v26?: ModelFloatInput | null;
  v27?: ModelFloatInput | null;
  v28?: ModelFloatInput | null;
  amount?: ModelFloatInput | null;
  time?: ModelStringInput | null;
  prob?: ModelFloatInput | null;
  pred?: ModelIntInput | null;
  and?: Array<ModelTransactionConditionInput | null> | null;
  or?: Array<ModelTransactionConditionInput | null> | null;
  not?: ModelTransactionConditionInput | null;
  accountTransactionsId?: ModelIDInput | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateTransactionInput = {
  id: string;
  v1?: number | null;
  v2?: number | null;
  v3?: number | null;
  v4?: number | null;
  v5?: number | null;
  v6?: number | null;
  v7?: number | null;
  v8?: number | null;
  v9?: number | null;
  v10?: number | null;
  v11?: number | null;
  v12?: number | null;
  v13?: number | null;
  v14?: number | null;
  v15?: number | null;
  v16?: number | null;
  v17?: number | null;
  v18?: number | null;
  v19?: number | null;
  v20?: number | null;
  v21?: number | null;
  v22?: number | null;
  v23?: number | null;
  v24?: number | null;
  v25?: number | null;
  v26?: number | null;
  v27?: number | null;
  v28?: number | null;
  amount?: number | null;
  time?: string | null;
  prob?: number | null;
  pred?: number | null;
  accountTransactionsId?: string | null;
};

export type DeleteTransactionInput = {
  id: string;
};

export type ModelAccountFilterInput = {
  id?: ModelIDInput | null;
  fname?: ModelStringInput | null;
  sname?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  bname?: ModelStringInput | null;
  bcity?: ModelStringInput | null;
  and?: Array<ModelAccountFilterInput | null> | null;
  or?: Array<ModelAccountFilterInput | null> | null;
  not?: ModelAccountFilterInput | null;
};

export type ModelAccountConnection = {
  __typename: "ModelAccountConnection";
  items: Array<Account | null>;
  nextToken?: string | null;
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null;
  v1?: ModelFloatInput | null;
  v2?: ModelFloatInput | null;
  v3?: ModelFloatInput | null;
  v4?: ModelFloatInput | null;
  v5?: ModelFloatInput | null;
  v6?: ModelFloatInput | null;
  v7?: ModelFloatInput | null;
  v8?: ModelFloatInput | null;
  v9?: ModelFloatInput | null;
  v10?: ModelFloatInput | null;
  v11?: ModelFloatInput | null;
  v12?: ModelFloatInput | null;
  v13?: ModelFloatInput | null;
  v14?: ModelFloatInput | null;
  v15?: ModelFloatInput | null;
  v16?: ModelFloatInput | null;
  v17?: ModelFloatInput | null;
  v18?: ModelFloatInput | null;
  v19?: ModelFloatInput | null;
  v20?: ModelFloatInput | null;
  v21?: ModelFloatInput | null;
  v22?: ModelFloatInput | null;
  v23?: ModelFloatInput | null;
  v24?: ModelFloatInput | null;
  v25?: ModelFloatInput | null;
  v26?: ModelFloatInput | null;
  v27?: ModelFloatInput | null;
  v28?: ModelFloatInput | null;
  amount?: ModelFloatInput | null;
  time?: ModelStringInput | null;
  prob?: ModelFloatInput | null;
  pred?: ModelIntInput | null;
  and?: Array<ModelTransactionFilterInput | null> | null;
  or?: Array<ModelTransactionFilterInput | null> | null;
  not?: ModelTransactionFilterInput | null;
  accountTransactionsId?: ModelIDInput | null;
};

export type CreateAccountMutation = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAccountMutation = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAccountMutation = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateTransactionMutation = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type UpdateTransactionMutation = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type DeleteTransactionMutation = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type GetAccountQuery = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAccountsQuery = {
  __typename: "ModelAccountConnection";
  items: Array<{
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetTransactionQuery = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type ListTransactionsQuery = {
  __typename: "ModelTransactionConnection";
  items: Array<{
    __typename: "Transaction";
    id: string;
    account?: {
      __typename: "Account";
      id: string;
      fname: string;
      sname: string;
      email: string;
      phone: string;
      bname: string;
      bcity: string;
      createdAt: string;
      updatedAt: string;
    } | null;
    v1: number;
    v2: number;
    v3: number;
    v4: number;
    v5: number;
    v6: number;
    v7: number;
    v8: number;
    v9: number;
    v10: number;
    v11: number;
    v12: number;
    v13: number;
    v14: number;
    v15: number;
    v16: number;
    v17: number;
    v18: number;
    v19: number;
    v20: number;
    v21: number;
    v22: number;
    v23: number;
    v24: number;
    v25: number;
    v26: number;
    v27: number;
    v28: number;
    amount: number;
    time: string;
    prob?: number | null;
    pred?: number | null;
    createdAt: string;
    updatedAt: string;
    accountTransactionsId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateAccountSubscription = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAccountSubscription = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAccountSubscription = {
  __typename: "Account";
  id: string;
  fname: string;
  sname: string;
  email: string;
  phone: string;
  bname: string;
  bcity: string;
  transactions?: {
    __typename: "ModelTransactionConnection";
    items: Array<{
      __typename: "Transaction";
      id: string;
      v1: number;
      v2: number;
      v3: number;
      v4: number;
      v5: number;
      v6: number;
      v7: number;
      v8: number;
      v9: number;
      v10: number;
      v11: number;
      v12: number;
      v13: number;
      v14: number;
      v15: number;
      v16: number;
      v17: number;
      v18: number;
      v19: number;
      v20: number;
      v21: number;
      v22: number;
      v23: number;
      v24: number;
      v25: number;
      v26: number;
      v27: number;
      v28: number;
      amount: number;
      time: string;
      prob?: number | null;
      pred?: number | null;
      createdAt: string;
      updatedAt: string;
      accountTransactionsId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTransactionSubscription = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type OnUpdateTransactionSubscription = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

export type OnDeleteTransactionSubscription = {
  __typename: "Transaction";
  id: string;
  account?: {
    __typename: "Account";
    id: string;
    fname: string;
    sname: string;
    email: string;
    phone: string;
    bname: string;
    bcity: string;
    transactions?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  v1: number;
  v2: number;
  v3: number;
  v4: number;
  v5: number;
  v6: number;
  v7: number;
  v8: number;
  v9: number;
  v10: number;
  v11: number;
  v12: number;
  v13: number;
  v14: number;
  v15: number;
  v16: number;
  v17: number;
  v18: number;
  v19: number;
  v20: number;
  v21: number;
  v22: number;
  v23: number;
  v24: number;
  v25: number;
  v26: number;
  v27: number;
  v28: number;
  amount: number;
  time: string;
  prob?: number | null;
  pred?: number | null;
  createdAt: string;
  updatedAt: string;
  accountTransactionsId?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateAccount(
    input: CreateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<CreateAccountMutation> {
    const statement = `mutation CreateAccount($input: CreateAccountInput!, $condition: ModelAccountConditionInput) {
        createAccount(input: $input, condition: $condition) {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAccountMutation>response.data.createAccount;
  }
  async UpdateAccount(
    input: UpdateAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<UpdateAccountMutation> {
    const statement = `mutation UpdateAccount($input: UpdateAccountInput!, $condition: ModelAccountConditionInput) {
        updateAccount(input: $input, condition: $condition) {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAccountMutation>response.data.updateAccount;
  }
  async DeleteAccount(
    input: DeleteAccountInput,
    condition?: ModelAccountConditionInput
  ): Promise<DeleteAccountMutation> {
    const statement = `mutation DeleteAccount($input: DeleteAccountInput!, $condition: ModelAccountConditionInput) {
        deleteAccount(input: $input, condition: $condition) {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAccountMutation>response.data.deleteAccount;
  }
  async CreateTransaction(
    input: CreateTransactionInput,
    condition?: ModelTransactionConditionInput
  ): Promise<CreateTransactionMutation> {
    const statement = `mutation CreateTransaction($input: CreateTransactionInput!, $condition: ModelTransactionConditionInput) {
        createTransaction(input: $input, condition: $condition) {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTransactionMutation>response.data.createTransaction;
  }
  async UpdateTransaction(
    input: UpdateTransactionInput,
    condition?: ModelTransactionConditionInput
  ): Promise<UpdateTransactionMutation> {
    const statement = `mutation UpdateTransaction($input: UpdateTransactionInput!, $condition: ModelTransactionConditionInput) {
        updateTransaction(input: $input, condition: $condition) {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTransactionMutation>response.data.updateTransaction;
  }
  async DeleteTransaction(
    input: DeleteTransactionInput,
    condition?: ModelTransactionConditionInput
  ): Promise<DeleteTransactionMutation> {
    const statement = `mutation DeleteTransaction($input: DeleteTransactionInput!, $condition: ModelTransactionConditionInput) {
        deleteTransaction(input: $input, condition: $condition) {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTransactionMutation>response.data.deleteTransaction;
  }
  async GetAccount(id: string): Promise<GetAccountQuery> {
    const statement = `query GetAccount($id: ID!) {
        getAccount(id: $id) {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAccountQuery>response.data.getAccount;
  }
  async ListAccounts(
    filter?: ModelAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAccountsQuery> {
    const statement = `query ListAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String) {
        listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAccountsQuery>response.data.listAccounts;
  }
  async GetTransaction(id: string): Promise<GetTransactionQuery> {
    const statement = `query GetTransaction($id: ID!) {
        getTransaction(id: $id) {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTransactionQuery>response.data.getTransaction;
  }
  async ListTransactions(
    filter?: ModelTransactionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTransactionsQuery> {
    const statement = `query ListTransactions($filter: ModelTransactionFilterInput, $limit: Int, $nextToken: String) {
        listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            account {
              __typename
              id
              fname
              sname
              email
              phone
              bname
              bcity
              createdAt
              updatedAt
            }
            v1
            v2
            v3
            v4
            v5
            v6
            v7
            v8
            v9
            v10
            v11
            v12
            v13
            v14
            v15
            v16
            v17
            v18
            v19
            v20
            v21
            v22
            v23
            v24
            v25
            v26
            v27
            v28
            amount
            time
            prob
            pred
            createdAt
            updatedAt
            accountTransactionsId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTransactionsQuery>response.data.listTransactions;
  }
  OnCreateAccountListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAccount">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAccount {
        onCreateAccount {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAccount">>
  >;

  OnUpdateAccountListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAccount">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAccount {
        onUpdateAccount {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAccount">>
  >;

  OnDeleteAccountListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAccount">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAccount {
        onDeleteAccount {
          __typename
          id
          fname
          sname
          email
          phone
          bname
          bcity
          transactions {
            __typename
            items {
              __typename
              id
              v1
              v2
              v3
              v4
              v5
              v6
              v7
              v8
              v9
              v10
              v11
              v12
              v13
              v14
              v15
              v16
              v17
              v18
              v19
              v20
              v21
              v22
              v23
              v24
              v25
              v26
              v27
              v28
              amount
              time
              prob
              pred
              createdAt
              updatedAt
              accountTransactionsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAccount">>
  >;

  OnCreateTransactionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTransaction">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTransaction {
        onCreateTransaction {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTransaction">>
  >;

  OnUpdateTransactionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTransaction">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTransaction {
        onUpdateTransaction {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTransaction">>
  >;

  OnDeleteTransactionListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTransaction">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTransaction {
        onDeleteTransaction {
          __typename
          id
          account {
            __typename
            id
            fname
            sname
            email
            phone
            bname
            bcity
            transactions {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          v1
          v2
          v3
          v4
          v5
          v6
          v7
          v8
          v9
          v10
          v11
          v12
          v13
          v14
          v15
          v16
          v17
          v18
          v19
          v20
          v21
          v22
          v23
          v24
          v25
          v26
          v27
          v28
          amount
          time
          prob
          pred
          createdAt
          updatedAt
          accountTransactionsId
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTransaction">>
  >;
}
