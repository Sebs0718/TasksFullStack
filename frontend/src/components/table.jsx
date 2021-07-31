import React, { useState, useEffect } from "react";
import styled from "styled-components";

//import FlastList from "flatlist-react";

const ContainerTable = styled.div`
  display: block;
  max-width: 100%;
  margin: 20px 0;
  padding-bottom: 20px;
  @media (max-width: 767px) {
    margin-top: 10px;
  }

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    border-spacing: 0;
    border-radius: 10px 10px 0 0;
    border: 1px solid var(--color-Line);
    border-block-start-style: none;
    th,
    td {
      margin: 0;
      padding: 1rem;
      font-size: 0.9rem;
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }
    }
    th {
      font-weight: 400;
      text-align: left;
    }
    .tbody {
      > tr:hover {
        background-color: var(--color-Table);
      }
      .widthOutOrders {
        height: calc(100vh - 260px);
        @media (max-width: 767px) {
          height: calc(100vh - 275px);
        }
        &:hover {
          background-color: transparent;
        }
        > td {
          text-align: center;
          font-weight: 700;
        }
      }
    }

    .supplier {
      display: flex;
      align-items: center;
      width: auto;
      & tr:hover {
        background-color: transparent;
      }
      .iconLogo {
        margin-right: 5px;
      }
    }

    .total {
      font-weight: 700;
    }

    .stateOrder {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: auto;
      border-radius: 0.5rem;
      padding: 0.5rem;
      & tr:hover {
        background-color: transparent;
      }
      & tr:nth-child(2) {
        font-size: 0.7rem;
        color: var(--color-Line);
      }
    }

    .actions {
      padding: 0;
      > tr {
        display: flex;
        justify-content: space-around;
        &:hover {
          background-color: transparent;
        }
      }
      .iconAction {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        border-radius: 0.5rem;
        padding: 0.5rem;
        & tr:hover {
          background-color: transparent;
        }
        &:hover {
          cursor: pointer;
        }
        & tr:nth-child(2) {
          font-size: 0.7rem;
          color: var(--color-Line);
        }
      }
      .iconAction2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: auto;
        border-radius: 0.5rem;
        padding: 0.5rem;
        & tr:hover {
          background-color: transparent;
        }
        &:hover {
          cursor: pointer;
        }
        > tr {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }

    .headerTable {
      background-color: var(--color-Line);
      color: var(--color-White);
      font-size: 0.8rem;
    }
  }
`;

const headerTitle = [
  {
    header: "number",
  },
  {
    header: "title",
  },
  {
    header: "description",
  },
  {
    header: "state",
  },
  {
    header: "actions",
  },
];

const table_notes = () => {

  return (
    <ContainerTable>
      <table className="tableWrap">
        <thead className="headerTable">
          <tr>
            {headerTitle.map((item, index) => {
              return <th key={index}>{item.header.toUpperCase()}</th>;
            })}
          </tr>
        </thead>
        <tbody className="tbody">
          {/* <FlastList
            renderWhenEmpty={() => (
              <tr className="widthOutOrders">
                <td colSpan="9">notas no encontradas</td>
              </tr>
            )}
            list={
              allOrders 
            }
          /> */}
        </tbody>
      </table>
    </ContainerTable>
  );
};

export default table_notes;
