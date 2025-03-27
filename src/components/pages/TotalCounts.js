import React from "react";
import styles from "@/styles/TotalCounts.module.css";
import Image from "next/image";

class TotalCounts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <div className="totalCount">
            <Image src="/icon-orders.svg" alt="icon" width={84.3} height={85} />
            <div className="total-dv">
              <span className="total-num">75</span>
              <span className="total-name">Total Orders</span>
            </div>
          </div>
       
    );
  }
}

export default TotalCounts;
