import styled from "styled-components";

type Status = "created" | "partial" | "done";

const statusColor = (status: Status) => {
  const colors = {
    created: "#811616",
    partial: "#c98f39",
    done: "#349727",
  };

  return colors[status];
};

const statusIcon = (status: Status) => {
  const icons = {
    created: '"[ ]"',
    partial: '"[-]"',
    done: '"[✔]"',
  };

  return icons[status];
};

export const Item = styled.li<{ status: Status; }> `
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin-bottom: 2px;

  &:before {
    content: ${({ status }) => statusIcon(status)};
    color: ${({ status }) => statusColor(status)};
    margin-right: 8px;
  }
`;
