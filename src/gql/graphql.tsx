import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type AddonInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  isRequired?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type AddonProduct = {
  __typename?: 'AddonProduct';
  id?: Maybe<Scalars['Int']['output']>;
  isRequired?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Attendance = {
  __typename?: 'Attendance';
  checkDate?: Maybe<Scalars['String']['output']>;
  checkIn?: Maybe<Scalars['String']['output']>;
  checkOut?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  leave?: Maybe<Leave>;
  overTimeIn?: Maybe<Scalars['String']['output']>;
  overTimeOut?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type BankInfo = {
  __typename?: 'BankInfo';
  createdDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Brand = {
  __typename?: 'Brand';
  id?: Maybe<Scalars['Int']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BrandInput = {
  logo?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CartItemInput = {
  addons?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  skuId?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  root?: Maybe<Scalars['Int']['output']>;
};

export type CategoryIndexInput = {
  id: Scalars['Int']['input'];
  index: Scalars['Int']['input'];
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  root?: InputMaybe<Scalars['Int']['input']>;
};

export type ChangeOrderInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  bankId?: InputMaybe<Scalars['Int']['input']>;
  bankType?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customerPaid?: InputMaybe<Scalars['String']['input']>;
  deliverPickupCode?: InputMaybe<Scalars['String']['input']>;
  deliverPickupId?: InputMaybe<Scalars['Int']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  invoice?: InputMaybe<Scalars['Int']['input']>;
  itemStatus?: InputMaybe<StatusOrderItem>;
  orderId: Scalars['Int']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StatusOrder>;
};

export type CurrencyShift = {
  __typename?: 'CurrencyShift';
  khr?: Maybe<Scalars['Float']['output']>;
  usd?: Maybe<Scalars['Float']['output']>;
};

export type CurrencyShiftInput = {
  khr?: InputMaybe<Scalars['Float']['input']>;
  usd?: InputMaybe<Scalars['Float']['input']>;
};

export type Delivery = {
  __typename?: 'Delivery';
  contact?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DeliveryInput = {
  contact?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FilterProduct = {
  category?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  isLowStock?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Array<InputMaybe<Status_Product>>>;
  type?: InputMaybe<Array<InputMaybe<Type_Product>>>;
};

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Holiday = {
  __typename?: 'Holiday';
  date?: Maybe<Scalars['String']['output']>;
  extra?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type HolidayInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  extra?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Integrate = {
  __typename?: 'Integrate';
  id?: Maybe<Scalars['Int']['output']>;
  integrate?: Maybe<Product>;
  product?: Maybe<Product>;
  qty?: Maybe<Scalars['String']['output']>;
};

export type IntegrateInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  integrateId?: InputMaybe<Scalars['Int']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
};

export type Leave = {
  __typename?: 'Leave';
  approvedBy?: Maybe<User>;
  approvedDate?: Maybe<Scalars['String']['output']>;
  cancelledBy?: Maybe<User>;
  cancelledDate?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  leaveReason?: Maybe<Scalars['String']['output']>;
  leaveType?: Maybe<Scalars['String']['output']>;
  rejectedBy?: Maybe<User>;
  rejectedDate?: Maybe<Scalars['String']['output']>;
  requestedBy?: Maybe<User>;
  requestedDate?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['String']['output']>;
  status?: Maybe<LeaveStatus>;
};

export type LeaveInput = {
  duration?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  leaveReason?: InputMaybe<Scalars['String']['input']>;
  leaveType?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<LeaveStatus>;
};

export enum LeaveStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Rejected = 'REJECTED',
  Request = 'REQUEST'
}

export type Mutation = {
  __typename?: 'Mutation';
  addDiscountOrder?: Maybe<Scalars['Boolean']['output']>;
  addOrderItem?: Maybe<Scalars['Boolean']['output']>;
  changeOrderStatus?: Maybe<Scalars['Boolean']['output']>;
  checkAttendance?: Maybe<Scalars['Boolean']['output']>;
  checkProductCode?: Maybe<Scalars['Boolean']['output']>;
  createBank?: Maybe<Scalars['Boolean']['output']>;
  createBrand?: Maybe<Scalars['Boolean']['output']>;
  createCategory?: Maybe<Scalars['Boolean']['output']>;
  createDelivery?: Maybe<Scalars['Boolean']['output']>;
  createHoliday?: Maybe<Scalars['Boolean']['output']>;
  createLeave?: Maybe<Scalars['Boolean']['output']>;
  createOrder?: Maybe<Scalars['Int']['output']>;
  createOrderSchedule?: Maybe<Scalars['Boolean']['output']>;
  createOverTime?: Maybe<Scalars['Boolean']['output']>;
  createPosition?: Maybe<Scalars['Boolean']['output']>;
  createProduct?: Maybe<Scalars['Boolean']['output']>;
  createProductStock?: Maybe<Scalars['Boolean']['output']>;
  createShift?: Maybe<Scalars['Boolean']['output']>;
  createUser?: Maybe<Scalars['Boolean']['output']>;
  decreaseOrderItem?: Maybe<Scalars['Boolean']['output']>;
  deleteOrderSchedule?: Maybe<Scalars['Boolean']['output']>;
  generateTableSet?: Maybe<Scalars['Boolean']['output']>;
  generateTokenOrder?: Maybe<Scalars['String']['output']>;
  increaseOrderItem?: Maybe<Scalars['Boolean']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  markOrderItemStatus?: Maybe<Scalars['Boolean']['output']>;
  peopleInOrder?: Maybe<Scalars['Boolean']['output']>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  setTypePaymentOrder?: Maybe<Scalars['Boolean']['output']>;
  signatureOrder?: Maybe<Scalars['Boolean']['output']>;
  swapOrderTable?: Maybe<Scalars['Boolean']['output']>;
  testSubscription?: Maybe<Scalars['Boolean']['output']>;
  updateBank?: Maybe<Scalars['Boolean']['output']>;
  updateBrand?: Maybe<Scalars['Boolean']['output']>;
  updateCategory?: Maybe<Scalars['Boolean']['output']>;
  updateCategoryIndex?: Maybe<Scalars['Boolean']['output']>;
  updateDelivery?: Maybe<Scalars['Boolean']['output']>;
  updateHoliday?: Maybe<Scalars['Boolean']['output']>;
  updateLeave?: Maybe<Scalars['Boolean']['output']>;
  updateLeaveStatus?: Maybe<Scalars['Boolean']['output']>;
  updateOrderSchedule?: Maybe<Scalars['Boolean']['output']>;
  updateOverTime?: Maybe<Scalars['Boolean']['output']>;
  updateOverTimeStatus?: Maybe<Scalars['Boolean']['output']>;
  updatePosition?: Maybe<Scalars['Boolean']['output']>;
  updateProduct?: Maybe<Scalars['Boolean']['output']>;
  updateProductStock?: Maybe<Scalars['Boolean']['output']>;
  updateSetting?: Maybe<Scalars['Boolean']['output']>;
  updateShift?: Maybe<Scalars['Boolean']['output']>;
  updateStatusProduct?: Maybe<Scalars['Boolean']['output']>;
  updateUser?: Maybe<Scalars['Boolean']['output']>;
  verifyOtpOrder?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationAddDiscountOrderArgs = {
  discount: Scalars['Float']['input'];
  id: Scalars['Int']['input'];
};


export type MutationAddOrderItemArgs = {
  data?: InputMaybe<CartItemInput>;
  orderId: Scalars['Int']['input'];
};


export type MutationChangeOrderStatusArgs = {
  data?: InputMaybe<ChangeOrderInput>;
};


export type MutationCheckAttendanceArgs = {
  date: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationCheckProductCodeArgs = {
  code: Scalars['String']['input'];
};


export type MutationCreateBankArgs = {
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateBrandArgs = {
  data?: InputMaybe<BrandInput>;
};


export type MutationCreateCategoryArgs = {
  data?: InputMaybe<CategoryInput>;
};


export type MutationCreateDeliveryArgs = {
  data?: InputMaybe<DeliveryInput>;
};


export type MutationCreateHolidayArgs = {
  data?: InputMaybe<HolidayInput>;
};


export type MutationCreateLeaveArgs = {
  data?: InputMaybe<LeaveInput>;
  userId: Scalars['Int']['input'];
};


export type MutationCreateOrderArgs = {
  data?: InputMaybe<OrderInput>;
};


export type MutationCreateOrderScheduleArgs = {
  data?: InputMaybe<OrderScheduleInput>;
};


export type MutationCreateOverTimeArgs = {
  data?: InputMaybe<OverTimeInput>;
  userId: Scalars['Int']['input'];
};


export type MutationCreatePositionArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateProductArgs = {
  data?: InputMaybe<ProductInput>;
};


export type MutationCreateProductStockArgs = {
  data?: InputMaybe<ProductStockInput>;
};


export type MutationCreateShiftArgs = {
  data?: InputMaybe<ShiftInput>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserInput>;
};


export type MutationDecreaseOrderItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrderScheduleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationGenerateTableSetArgs = {
  sets: Scalars['Int']['input'];
};


export type MutationGenerateTokenOrderArgs = {
  set: Scalars['Int']['input'];
};


export type MutationIncreaseOrderItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationMarkOrderItemStatusArgs = {
  id: Scalars['Int']['input'];
  status?: InputMaybe<StatusOrderItem>;
};


export type MutationPeopleInOrderArgs = {
  count: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type MutationResetPasswordArgs = {
  oldPassowrd: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationSetTypePaymentOrderArgs = {
  bankId?: InputMaybe<Scalars['Int']['input']>;
  bankType?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationSignatureOrderArgs = {
  id: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};


export type MutationSwapOrderTableArgs = {
  orderId: Scalars['Int']['input'];
  table?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTestSubscriptionArgs = {
  str?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateBankArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateBrandArgs = {
  data?: InputMaybe<BrandInput>;
  id: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCategoryArgs = {
  data?: InputMaybe<CategoryInput>;
  id: Scalars['Int']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateCategoryIndexArgs = {
  data?: InputMaybe<Array<InputMaybe<CategoryIndexInput>>>;
};


export type MutationUpdateDeliveryArgs = {
  data?: InputMaybe<DeliveryInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateHolidayArgs = {
  data?: InputMaybe<HolidayInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateLeaveArgs = {
  data?: InputMaybe<LeaveInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateLeaveStatusArgs = {
  id: Scalars['Int']['input'];
  status?: InputMaybe<LeaveStatus>;
};


export type MutationUpdateOrderScheduleArgs = {
  data?: InputMaybe<OrderScheduleInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOverTimeArgs = {
  data?: InputMaybe<OverTimeInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOverTimeStatusArgs = {
  id: Scalars['Int']['input'];
  status?: InputMaybe<OverTimeStatus>;
};


export type MutationUpdatePositionArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateProductArgs = {
  data?: InputMaybe<ProductInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductStockArgs = {
  data?: InputMaybe<ProductStockInput>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateSettingArgs = {
  option?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateShiftArgs = {
  data?: InputMaybe<ShiftInput>;
  expected?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateStatusProductArgs = {
  id: Scalars['Int']['input'];
  status: Status_Product;
};


export type MutationUpdateUserArgs = {
  data?: InputMaybe<UserInput>;
  id: Scalars['Int']['input'];
};


export type MutationVerifyOtpOrderArgs = {
  code: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type Order = {
  __typename?: 'Order';
  address?: Maybe<Scalars['String']['output']>;
  bankId?: Maybe<Scalars['Int']['output']>;
  bankType?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customerPaid?: Maybe<Scalars['String']['output']>;
  delivery?: Maybe<Delivery>;
  deliveryCode?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invoice?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<OrderItem>>>;
  log?: Maybe<Array<Maybe<OrderLog>>>;
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  paid?: Maybe<Scalars['String']['output']>;
  person?: Maybe<Scalars['Int']['output']>;
  set?: Maybe<Scalars['String']['output']>;
  status?: Maybe<StatusOrder>;
  total?: Maybe<Scalars['String']['output']>;
  uuid?: Maybe<Scalars['String']['output']>;
  vat?: Maybe<Scalars['String']['output']>;
};

export type OrderInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  bankId?: InputMaybe<Scalars['Int']['input']>;
  bankType?: InputMaybe<Scalars['String']['input']>;
  carts?: InputMaybe<Array<InputMaybe<CartItemInput>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customerPaid?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  invoice?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  set?: InputMaybe<Scalars['String']['input']>;
  uuid?: InputMaybe<Scalars['String']['input']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  addons?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isPrint?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  qty?: Maybe<Scalars['Int']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  sku?: Maybe<Sku>;
  status?: Maybe<StatusOrderItem>;
};

export type OrderLog = {
  __typename?: 'OrderLog';
  by?: Maybe<User>;
  date?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type OrderSchedule = {
  __typename?: 'OrderSchedule';
  endAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<OrderScheduleItem>>>;
  name?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['String']['output']>;
};

export type OrderScheduleInput = {
  endAt?: InputMaybe<Scalars['String']['input']>;
  items?: InputMaybe<Array<InputMaybe<OrderScheduleItemInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
};

export type OrderScheduleItem = {
  __typename?: 'OrderScheduleItem';
  sku?: Maybe<Sku>;
};

export type OrderScheduleItemInput = {
  skuId?: InputMaybe<Scalars['Int']['input']>;
};

export enum OrderViewBy {
  Admin = 'ADMIN',
  Kitchen = 'KITCHEN',
  User = 'USER'
}

export type OverTime = {
  __typename?: 'OverTime';
  approvedBy?: Maybe<User>;
  approvedDate?: Maybe<Scalars['String']['output']>;
  cancelledBy?: Maybe<User>;
  cancelledDate?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  otDate?: Maybe<Scalars['String']['output']>;
  rejectedBy?: Maybe<User>;
  rejectedDate?: Maybe<Scalars['String']['output']>;
  requestedBy?: Maybe<User>;
  requestedDate?: Maybe<Scalars['String']['output']>;
  startat?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OverTimeStatus>;
};

export type OverTimeInput = {
  endAt?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  otDate?: InputMaybe<Scalars['String']['input']>;
  startat?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OverTimeStatus>;
};

export enum OverTimeStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  Rejected = 'REJECTED',
  Request = 'REQUEST'
}

export type Position = {
  __typename?: 'Position';
  createdDate?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedDate?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  addons?: Maybe<Array<Maybe<AddonProduct>>>;
  category?: Maybe<Category>;
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Scalars['String']['output']>;
  integrates?: Maybe<Array<Maybe<Integrate>>>;
  sku?: Maybe<Array<Maybe<Sku>>>;
  status?: Maybe<Status_Product>;
  stockAlter?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Array<Maybe<Type_Product>>>;
};

export type ProductInput = {
  addons?: InputMaybe<Array<InputMaybe<AddonInput>>>;
  category?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Scalars['String']['input']>;
  integrate?: InputMaybe<Array<InputMaybe<IntegrateInput>>>;
  sku?: InputMaybe<Array<InputMaybe<SkuInput>>>;
  stockAlter?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<Type_Product>>>;
};

export type ProductSell = {
  __typename?: 'ProductSell';
  product?: Maybe<Product>;
  qty?: Maybe<Scalars['Int']['output']>;
  sku?: Maybe<Sku>;
  total?: Maybe<Scalars['Float']['output']>;
};

export type ProductStock = {
  __typename?: 'ProductStock';
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  qty?: Maybe<Scalars['Int']['output']>;
};

export type ProductStockInput = {
  location?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['Int']['input']>;
  qty?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  activityStaff?: Maybe<Scalars['JSON']['output']>;
  attendanceListAdmin?: Maybe<Array<Maybe<Attendance>>>;
  attendanceStaff?: Maybe<Array<Maybe<Attendance>>>;
  bankInfo?: Maybe<BankInfo>;
  books?: Maybe<Array<Maybe<Book>>>;
  brand?: Maybe<Brand>;
  brandList?: Maybe<Array<Maybe<Brand>>>;
  category?: Maybe<Category>;
  categoryList?: Maybe<Scalars['JSON']['output']>;
  checkHaveOpenShiftToday?: Maybe<Scalars['Boolean']['output']>;
  deliveryById?: Maybe<Delivery>;
  deliveryList?: Maybe<Array<Maybe<Delivery>>>;
  getAttendanceStaff?: Maybe<Array<Maybe<Attendance>>>;
  getAttendanceStaffToday?: Maybe<Attendance>;
  getLeaveAdmin?: Maybe<Scalars['JSON']['output']>;
  getPositionList?: Maybe<Array<Maybe<Position>>>;
  getSummaryAttendanceStaff?: Maybe<Scalars['JSON']['output']>;
  getbankList?: Maybe<Array<Maybe<BankInfo>>>;
  holiday?: Maybe<Holiday>;
  holidayList?: Maybe<Array<Maybe<Holiday>>>;
  leave?: Maybe<Leave>;
  leaveList?: Maybe<Array<Maybe<Leave>>>;
  me?: Maybe<User>;
  order?: Maybe<Order>;
  orderBalanceSummary?: Maybe<Scalars['JSON']['output']>;
  orderItem?: Maybe<Scalars['JSON']['output']>;
  orderList?: Maybe<Array<Maybe<Order>>>;
  orderSchedule?: Maybe<OrderSchedule>;
  orderScheduleList?: Maybe<Array<Maybe<OrderSchedule>>>;
  overTime?: Maybe<OverTime>;
  overTimeList?: Maybe<Array<Maybe<OverTime>>>;
  position?: Maybe<Position>;
  product?: Maybe<Product>;
  productList?: Maybe<Array<Maybe<Product>>>;
  productStock?: Maybe<ProductStock>;
  productStockList?: Maybe<Array<Maybe<ProductStock>>>;
  reportSaleByDay?: Maybe<Scalars['JSON']['output']>;
  reportSaleProduct?: Maybe<Scalars['JSON']['output']>;
  reportStaffPayroll?: Maybe<Scalars['JSON']['output']>;
  roleList?: Maybe<Array<Maybe<Role>>>;
  settingList?: Maybe<Array<Maybe<Setting>>>;
  shiftById?: Maybe<Shift>;
  shiftList?: Maybe<Array<Maybe<Shift>>>;
  tableSet?: Maybe<TableSet>;
  tableSetList?: Maybe<Array<Maybe<TableSet>>>;
  topProductSell?: Maybe<Array<Maybe<ProductSell>>>;
  user?: Maybe<User>;
  userList?: Maybe<Array<Maybe<User>>>;
};


export type QueryActivityStaffArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAttendanceListAdminArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  month: Scalars['Int']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  year: Scalars['Int']['input'];
};


export type QueryAttendanceStaffArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};


export type QueryBankInfoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBrandArgs = {
  id: Scalars['Int']['input'];
};


export type QueryBrandListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDeliveryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDeliveryListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAttendanceStaffArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAttendanceStaffTodayArgs = {
  date: Scalars['String']['input'];
};


export type QueryGetPositionListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetSummaryAttendanceStaffArgs = {
  userId: Scalars['Int']['input'];
};


export type QueryGetbankListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHolidayArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLeaveArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLeaveListArgs = {
  admin?: InputMaybe<Scalars['Boolean']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<InputMaybe<LeaveStatus>>>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderBalanceSummaryArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderItemArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrderListArgs = {
  discount?: InputMaybe<Scalars['Boolean']['input']>;
  fromDate?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  sign?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<Array<InputMaybe<StatusOrder>>>;
  toDate?: InputMaybe<Scalars['String']['input']>;
  viewBy?: InputMaybe<OrderViewBy>;
};


export type QueryOrderScheduleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOverTimeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOverTimeListArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Array<InputMaybe<OverTimeStatus>>>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPositionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductListArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterProduct>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  schedule?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProductStockArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductStockListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryReportSaleByDayArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReportSaleProductArgs = {
  filters?: InputMaybe<ReportSaleFilter>;
  from?: InputMaybe<Scalars['String']['input']>;
  groupBy?: InputMaybe<ReportSaleGroupBy>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReportStaffPayrollArgs = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryShiftByIdArgs = {
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryShiftListArgs = {
  fromDate?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  toDate?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryTableSetArgs = {
  id: Scalars['Int']['input'];
};


export type QueryTableSetListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTopProductSellArgs = {
  categoryIds?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserListArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  roles?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ReportSaleFilter = {
  category?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export enum ReportSaleGroupBy {
  Date = 'DATE',
  Product = 'PRODUCT'
}

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Sku = {
  __typename?: 'SKU';
  discount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  product?: Maybe<Product>;
  status?: Maybe<Status_Product>;
  unit?: Maybe<Scalars['String']['output']>;
};

export type SkuInput = {
  discount?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Status_Product>;
  unit?: InputMaybe<Scalars['String']['input']>;
};

export enum Status_Product {
  Available = 'AVAILABLE',
  Inactive = 'INACTIVE',
  OutOfStock = 'OUT_OF_STOCK',
  TimeOut = 'TIME_OUT'
}

export type Setting = {
  __typename?: 'Setting';
  option?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Shift = {
  __typename?: 'Shift';
  bank?: Maybe<Scalars['JSON']['output']>;
  bill?: Maybe<Scalars['Int']['output']>;
  card?: Maybe<Scalars['Int']['output']>;
  close?: Maybe<Scalars['String']['output']>;
  closeCurrency?: Maybe<CurrencyShift>;
  customer?: Maybe<Scalars['String']['output']>;
  customerAvgCost?: Maybe<Scalars['String']['output']>;
  deposit?: Maybe<Scalars['String']['output']>;
  expectedCurrency?: Maybe<CurrencyShift>;
  id?: Maybe<Scalars['Int']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  open?: Maybe<Scalars['String']['output']>;
  openCurrency?: Maybe<CurrencyShift>;
  user?: Maybe<User>;
};

export type ShiftInput = {
  close?: InputMaybe<Scalars['String']['input']>;
  closeCurrency?: InputMaybe<CurrencyShiftInput>;
  deposit?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  open?: InputMaybe<Scalars['String']['input']>;
  openCurrency?: InputMaybe<CurrencyShiftInput>;
  userId: Scalars['Int']['input'];
};

export enum StatusOrder {
  Cancelled = 'CANCELLED',
  Checkout = 'CHECKOUT',
  Delivery = 'DELIVERY',
  Pending = 'PENDING',
  Verify = 'VERIFY'
}

export enum StatusOrderItem {
  Completed = 'COMPLETED',
  Deleted = 'DELETED',
  Making = 'MAKING',
  OutOfStock = 'OUT_OF_STOCK',
  Pending = 'PENDING',
  RequestChange = 'REQUEST_CHANGE'
}

export type Subscription = {
  __typename?: 'Subscription';
  newOrderPending?: Maybe<Scalars['String']['output']>;
  orderSubscript?: Maybe<Scalars['JSON']['output']>;
};


export type SubscriptionNewOrderPendingArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOrderSubscriptArgs = {
  channel?: InputMaybe<Scalars['String']['input']>;
};

export enum Type_Product {
  Addon = 'ADDON',
  Free = 'FREE',
  Freezing = 'FREEZING',
  Production = 'PRODUCTION',
  Raw = 'RAW',
  SecondHand = 'SECOND_HAND'
}

export type TableSet = {
  __typename?: 'TableSet';
  fake?: Maybe<Scalars['Boolean']['output']>;
  order?: Maybe<Order>;
  set?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  bankAcc?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  bankType?: Maybe<Scalars['String']['output']>;
  baseSalary?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<Scalars['String']['output']>;
  createdDate?: Maybe<Scalars['String']['output']>;
  display?: Maybe<Scalars['String']['output']>;
  dob?: Maybe<Scalars['String']['output']>;
  fromTime?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isActive?: Maybe<Scalars['Boolean']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  startingAt?: Maybe<Scalars['String']['output']>;
  toTime?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  bankAcc?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  bankType?: InputMaybe<Scalars['String']['input']>;
  baseSalary?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<Scalars['String']['input']>;
  createdDate?: InputMaybe<Scalars['String']['input']>;
  display?: InputMaybe<Scalars['String']['input']>;
  dob?: InputMaybe<Scalars['String']['input']>;
  fromTime?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  startingAt?: InputMaybe<Scalars['String']['input']>;
  toTime?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: string | null };

export type CreateOrderMutationVariables = Exact<{
  data?: InputMaybe<OrderInput>;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: number | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, display?: string | null, contact?: string | null, gender?: string | null, createdDate?: string | null, isActive?: boolean | null, ownerId?: string | null, startingAt?: string | null, bankName?: string | null, bankAcc?: string | null, bankType?: string | null, position?: string | null, baseSalary?: string | null, type?: string | null, profile?: string | null, username?: string | null, fromTime?: string | null, toTime?: string | null, role?: { __typename?: 'Role', name?: string | null, id?: number | null } | null } | null };

export type ProductListQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<FilterProduct>;
}>;


export type ProductListQuery = { __typename?: 'Query', productList?: Array<{ __typename?: 'Product', id?: number | null, code?: string | null, title?: string | null, status?: Status_Product | null, images?: string | null, type?: Array<Type_Product | null> | null, category?: { __typename?: 'Category', id?: number | null, name?: string | null } | null, sku?: Array<{ __typename?: 'SKU', id?: number | null, name?: string | null, price?: number | null, status?: Status_Product | null, discount?: number | null, image?: string | null } | null> | null } | null> | null };

export type CategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryListQuery = { __typename?: 'Query', categoryList?: any | null };

export type SettingListQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingListQuery = { __typename?: 'Query', settingList?: Array<{ __typename?: 'Setting', value?: string | null, type?: string | null, option?: string | null } | null> | null };

export type GetbankListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetbankListQuery = { __typename?: 'Query', getbankList?: Array<{ __typename?: 'BankInfo', id?: number | null, name?: string | null } | null> | null };

export type OrderQueryVariables = Exact<{
  token?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type OrderQuery = { __typename?: 'Query', order?: { __typename?: 'Order', id?: number | null, address?: string | null, status?: StatusOrder | null, bankId?: number | null, customerPaid?: string | null, name?: string | null, paid?: string | null, set?: string | null, total?: string | null, uuid?: string | null, note?: string | null, code?: string | null, discount?: number | null, vat?: string | null, person?: number | null, currency?: string | null, invoice?: number | null, bankType?: string | null, deliveryCode?: string | null, log?: Array<{ __typename?: 'OrderLog', date?: string | null, text?: string | null, by?: { __typename?: 'User', id: number, display?: string | null } | null } | null> | null, delivery?: { __typename?: 'Delivery', id?: number | null, name?: string | null, contact?: string | null } | null, items?: Array<{ __typename?: 'OrderItem', createdDate?: string | null, id?: number | null, qty?: number | null, price?: number | null, discount?: number | null, status?: StatusOrderItem | null, addons?: string | null, remark?: string | null, isPrint?: boolean | null, sku?: { __typename?: 'SKU', price?: number | null, discount?: number | null, id?: number | null, unit?: string | null, name?: string | null, image?: string | null } | null, product?: { __typename?: 'Product', title?: string | null, images?: string | null, code?: string | null, description?: string | null, id?: number | null } | null } | null> | null } | null };


export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($data: OrderInput) {
  createOrder(data: $data)
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    display
    contact
    gender
    role {
      name
      id
    }
    createdDate
    isActive
    ownerId
    startingAt
    bankName
    bankAcc
    bankType
    position
    baseSalary
    type
    profile
    username
    fromTime
    toTime
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProductListDocument = gql`
    query productList($offset: Int, $limit: Int, $code: String, $schedule: Boolean, $filter: FilterProduct) {
  productList(
    offset: $offset
    limit: $limit
    code: $code
    schedule: $schedule
    filter: $filter
  ) {
    id
    code
    title
    status
    category {
      id
      name
    }
    images
    sku {
      id
      name
      price
      status
      discount
      image
    }
    type
  }
}
    `;

/**
 * __useProductListQuery__
 *
 * To run a query within a React component, call `useProductListQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductListQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      code: // value for 'code'
 *      schedule: // value for 'schedule'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useProductListQuery(baseOptions?: Apollo.QueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
      }
export function useProductListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export function useProductListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductListQuery, ProductListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductListQuery, ProductListQueryVariables>(ProductListDocument, options);
        }
export type ProductListQueryHookResult = ReturnType<typeof useProductListQuery>;
export type ProductListLazyQueryHookResult = ReturnType<typeof useProductListLazyQuery>;
export type ProductListSuspenseQueryHookResult = ReturnType<typeof useProductListSuspenseQuery>;
export type ProductListQueryResult = Apollo.QueryResult<ProductListQuery, ProductListQueryVariables>;
export const CategoryListDocument = gql`
    query categoryList {
  categoryList
}
    `;

/**
 * __useCategoryListQuery__
 *
 * To run a query within a React component, call `useCategoryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoryListQuery(baseOptions?: Apollo.QueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, options);
      }
export function useCategoryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, options);
        }
export function useCategoryListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CategoryListQuery, CategoryListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryListQuery, CategoryListQueryVariables>(CategoryListDocument, options);
        }
export type CategoryListQueryHookResult = ReturnType<typeof useCategoryListQuery>;
export type CategoryListLazyQueryHookResult = ReturnType<typeof useCategoryListLazyQuery>;
export type CategoryListSuspenseQueryHookResult = ReturnType<typeof useCategoryListSuspenseQuery>;
export type CategoryListQueryResult = Apollo.QueryResult<CategoryListQuery, CategoryListQueryVariables>;
export const SettingListDocument = gql`
    query settingList {
  settingList {
    value
    type
    option
  }
}
    `;

/**
 * __useSettingListQuery__
 *
 * To run a query within a React component, call `useSettingListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingListQuery(baseOptions?: Apollo.QueryHookOptions<SettingListQuery, SettingListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingListQuery, SettingListQueryVariables>(SettingListDocument, options);
      }
export function useSettingListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingListQuery, SettingListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingListQuery, SettingListQueryVariables>(SettingListDocument, options);
        }
export function useSettingListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<SettingListQuery, SettingListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SettingListQuery, SettingListQueryVariables>(SettingListDocument, options);
        }
export type SettingListQueryHookResult = ReturnType<typeof useSettingListQuery>;
export type SettingListLazyQueryHookResult = ReturnType<typeof useSettingListLazyQuery>;
export type SettingListSuspenseQueryHookResult = ReturnType<typeof useSettingListSuspenseQuery>;
export type SettingListQueryResult = Apollo.QueryResult<SettingListQuery, SettingListQueryVariables>;
export const GetbankListDocument = gql`
    query getbankList {
  getbankList {
    id
    name
  }
}
    `;

/**
 * __useGetbankListQuery__
 *
 * To run a query within a React component, call `useGetbankListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetbankListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetbankListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetbankListQuery(baseOptions?: Apollo.QueryHookOptions<GetbankListQuery, GetbankListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetbankListQuery, GetbankListQueryVariables>(GetbankListDocument, options);
      }
export function useGetbankListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetbankListQuery, GetbankListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetbankListQuery, GetbankListQueryVariables>(GetbankListDocument, options);
        }
export function useGetbankListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetbankListQuery, GetbankListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetbankListQuery, GetbankListQueryVariables>(GetbankListDocument, options);
        }
export type GetbankListQueryHookResult = ReturnType<typeof useGetbankListQuery>;
export type GetbankListLazyQueryHookResult = ReturnType<typeof useGetbankListLazyQuery>;
export type GetbankListSuspenseQueryHookResult = ReturnType<typeof useGetbankListSuspenseQuery>;
export type GetbankListQueryResult = Apollo.QueryResult<GetbankListQuery, GetbankListQueryVariables>;
export const OrderDocument = gql`
    query order($token: String, $orderId: Int) {
  order(token: $token, id: $orderId) {
    id
    address
    status
    bankId
    customerPaid
    name
    paid
    set
    total
    uuid
    note
    code
    discount
    vat
    person
    currency
    invoice
    bankType
    log {
      date
      text
      by {
        id
        display
      }
    }
    deliveryCode
    delivery {
      id
      name
      contact
    }
    items {
      createdDate
      id
      qty
      sku {
        price
        discount
        id
        unit
        name
        image
      }
      product {
        title
        images
        code
        description
        id
      }
      price
      discount
      status
      addons
      remark
      isPrint
    }
  }
}
    `;

/**
 * __useOrderQuery__
 *
 * To run a query within a React component, call `useOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderQuery({
 *   variables: {
 *      token: // value for 'token'
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useOrderQuery(baseOptions?: Apollo.QueryHookOptions<OrderQuery, OrderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
      }
export function useOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export function useOrderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<OrderQuery, OrderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrderQuery, OrderQueryVariables>(OrderDocument, options);
        }
export type OrderQueryHookResult = ReturnType<typeof useOrderQuery>;
export type OrderLazyQueryHookResult = ReturnType<typeof useOrderLazyQuery>;
export type OrderSuspenseQueryHookResult = ReturnType<typeof useOrderSuspenseQuery>;
export type OrderQueryResult = Apollo.QueryResult<OrderQuery, OrderQueryVariables>;