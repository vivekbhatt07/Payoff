import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { CustomerService } from "./CustomerService.jsx";
import SearchLogo from "../../../assets/images/searchLogo.svg";
import OutlineButton from "../../../components/OutlineButton/index.jsx";
import SortLogo from "../../../assets/images/sortLogo.svg";
import DownArrowRoundedLogo from "../../../assets/images/downArrowRoundedLogo.svg";
import { LuDownload } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";

import { Ripple } from "primereact/ripple";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";

export default function AdvancedFilterDemo() {
  const [customers, setCustomers] = useState(null);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    CustomerService.getCustomersMedium().then((data) => {
      setCustomers(getCustomers(data));
      setLoading(false);
    });
    initFilters();
  }, []);

  const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
      d.date = new Date(d.date);

      return d;
    });
  };

  const formatDate = (value) => {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      "country.name": {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      representative: { value: null, matchMode: FilterMatchMode.IN },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
    });
    setGlobalFilterValue("");
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between">
        <div className="relative">
          <img
            src={SearchLogo}
            alt="search logo"
            className="absolute py-[13px] pl-4"
          />

          <input
            className="bg-[##FFFFFF] rounded-[4px] py-[10px] pl-[38px] pr-[16px] w-[400px] text-[14px] leading-[20px] font-normal text-[#808080] border border-[#D9D9D9] max-w-[248px]"
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search by order ID..."
          />
        </div>
        <div className="flex flex-row gap-3">
          <OutlineButton className="py-[6px] px-3">
            <div className="flex items-center gap-[6px]">
              <span className="text-[16px] leading-[24px] font-normal text-[#4D4D4D]">
                Sort
              </span>
              <img src={SortLogo} alt="sort" />
            </div>
          </OutlineButton>
          <OutlineButton className="p-2">
            <LuDownload className="w-5 h-5" />
          </OutlineButton>
        </div>
      </div>
    );
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.date);
  };

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat="mm/dd/yy"
        placeholder="mm/dd/yyyy"
        mask="99/99/9999"
      />
    );
  };

  const balanceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.balance);
  };

  const balanceFilterTemplate = (options) => {
    return (
      <InputNumber
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        mode="currency"
        currency="INR"
        locale="en-IN"
      />
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        paginatorTemplate={{
          layout: "PrevPageLink PageLinks NextPageLink",
          PrevPageLink: (options) => {
            return (
              <button
                type="button"
                className={classNames(options.className, "border-round")}
                onClick={options.onClick}
                disabled={options.disabled}
                style={{
                  borderRadius: "4px",
                  padding: "6px 12px 6px 6px",
                  display: "flex",
                  gap: "6px",
                  border: "1px solid #D9D9D9",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#4D4D4D",
                }}
              >
                <IoChevronBackOutline />
                <span>Previous</span>
                <Ripple />
              </button>
            );
          },
          NextPageLink: (options) => {
            return (
              <button
                type="button"
                className={classNames(options.className, "border-round")}
                onClick={options.onClick}
                disabled={options.disabled}
                style={{
                  borderRadius: "4px",
                  padding: "6px 6px 6px 12px",
                  display: "flex",
                  gap: "6px",
                  border: "1px solid #D9D9D9",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#4D4D4D",
                  alignItems: "center",
                }}
              >
                <span>Next</span>
                <IoChevronForwardOutline />
                <Ripple />
              </button>
            );
          },
          PageLinks: (options) => {
            if (
              (options.view.startPage === options.page &&
                options.view.startPage !== 0) ||
              (options.view.endPage === options.page &&
                options.page + 1 !== options.totalPages)
            ) {
              const className = classNames(options.className, {
                "p-disabled": true,
              });

              return (
                <span className={className} style={{ userSelect: "none" }}>
                  ...
                </span>
              );
            }

            return (
              <button
                type="button"
                className={options.className}
                onClick={options.onClick}
                style={{ backgroundColor: "#aaa" }}
              >
                {options.page + 1}
                <Ripple />
              </button>
            );
          },
        }}
        breakpoint={{
          md: 5,
          sm: 3,
          xs: 2,
        }}
        value={customers}
        paginator
        showGridlines
        rows={1}
        loading={loading}
        dataKey="id"
        filters={filters}
        globalFilterFields={[
          "name",
          "country.name",
          "representative.name",
          "balance",
          "status",
        ]}
        header={header}
        emptyMessage="No customers found."
        style={{
          backgroundColor: "#fff",
          padding: "12px 12px 24px 12px",
          boxShadow: "0 2px 6px 0 #1A181E0A",
          borderRadius: "8px",
        }}
      >
        <Column
          field="name"
          header={
            <div className="flex gap-1 flex-row items-center">
              <span className="text-[14px] text-[#4D4D4D] leading-[20px] font-medium">
                Order ID
              </span>
            </div>
          }
          headerStyle={{
            backgroundColor: "#F2F2F2",
            padding: "10px 12px",
            borderRadius: "4px 0 0 4px",
          }}
          style={{ minWidth: "12rem" }}
          bodyStyle={{
            color: "#146EB4",
            paddingTop: "14px",
            paddingBottom: "14px",
            borderBottom: "1px solid #E6E6E6",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 500,
            paddingLeft: 0,
            margin: "0",
            marginLeft: "12px",
            display: "flex",
          }}
        />

        <Column
          header={
            <div className="flex gap-1 flex-row items-center">
              <span className="text-[14px] text-[#4D4D4D] leading-[20px] font-medium">
                Order date
              </span>
              <img
                src={DownArrowRoundedLogo}
                alt="down arrow"
                className="w-[7px] h-[5px]"
              />
            </div>
          }
          headerStyle={{ backgroundColor: "#F2F2F2", padding: "10px 12px" }}
          filterField="date"
          dataType="date"
          style={{ minWidth: "10rem" }}
          bodyStyle={{
            paddingTop: "14px",
            paddingBottom: "14px",
            borderBottom: "1px solid #E6E6E6",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
          }}
          body={dateBodyTemplate}
          filterElement={dateFilterTemplate}
        />
        <Column
          header={
            <div className="flex gap-1 flex-row items-center">
              <span className="text-[14px] text-[#4D4D4D] leading-[20px] font-medium">
                Order amount
              </span>
            </div>
          }
          headerStyle={{ backgroundColor: "#F2F2F2", padding: "10px 12px" }}
          filterField="balance"
          dataType="numeric"
          style={{ minWidth: "10rem" }}
          bodyStyle={{
            paddingTop: "14px",
            paddingBottom: "14px",
            borderBottom: "1px solid #E6E6E6",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
          }}
          body={balanceBodyTemplate}
          filterElement={balanceFilterTemplate}
        />
        <Column
          header={
            <div className="flex gap-1 flex-row items-center">
              <span className="text-[14px] text-[#4D4D4D] leading-[20px] font-medium">
                Transaction fees
              </span>
              <CiCircleInfo />
            </div>
          }
          headerStyle={{
            backgroundColor: "#F2F2F2",
            padding: "10px 12px",
            borderRadius: "0 4px 4px 0",
          }}
          filterField="balance"
          dataType="numeric"
          style={{ minWidth: "10rem" }}
          bodyStyle={{
            borderBottom: "1px solid #E6E6E6",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
            paddingRight: 0,
            margin: "0",
            marginRight: "12px",
            display: "flex",
          }}
          body={balanceBodyTemplate}
          filterElement={balanceFilterTemplate}
        />
      </DataTable>
    </div>
  );
}
